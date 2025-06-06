import { shouldExecute, execute } from "./minigames/init";

PlayerEvents.chat((event) => {
	if (!shouldExecute("chat")) return;
	execute({ server: event.server, player: event.player, message: event.message }, () => event.cancel());
});
