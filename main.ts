import { Handler, Context, Callback } from "aws-lambda";
import { bootstrap, getHttpEvent } from "../main";
import { Web3ContractModule } from "./web3-contract.module";

// 🔥 Global Error Handlers to Prevent Crashes
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Promise Rejection:", reason);
});

let server: Handler;

export const contractHandler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {

  if (event.httpMethod) {
    event = getHttpEvent(event);

    server = server ?? (await bootstrap(Web3ContractModule));
    return server(event, context, callback);
  } else {

    return await handleInternalEvent(event);
  }
};

async function handleInternalEvent(event: any) {

  let result

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
