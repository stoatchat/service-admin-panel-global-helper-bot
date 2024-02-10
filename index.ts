import { bgBlack, blue, gray, red, yellow } from "@colors/colors";
import { createLogger } from "../../logger";

import {
  accounts,
  messages,
  reports,
  serverMembers,
  servers,
  sessions,
  users,
} from "../../../lib/db/types";
import { RedisEventListener, publish } from "../../../lib/events";

import type { ProtocolV1 } from "revolt.js/lib/events/v1";
import type { Message } from "revolt-api";
import { decodeTime } from "ulid";
import dayjs from "dayjs";
import { writeFile } from "fs/promises";
import { LRUCache } from "lru-cache";
import { resolve } from "path";
import cron from "node-cron";

/**
 * Helper bot
 */
class HelperBot extends RedisEventListener {
  /**
   * Handle events from Redis
   * @param event Event
   */
  handle(event: ProtocolV1["server"]) {
    if (event.type === "Message") {
      this.inspect(event);
    }
  }

  /**
   * Inspect the actual message
   * @param message Message
   */
  inspect(message: Message) {
    //
  }
}

const botShield = new BotShield();
botShield.init([
    "01FD53QCD84PX7D2GBV5SBE09N" // #Submit to Discover
]);

log(blue("Bot listening for messages!"));
