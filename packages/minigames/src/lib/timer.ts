import type { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent";
import { startMinigame, endMinigame } from "./minigames/init";
import { MINUTE_TICKS } from "./util";

(function (): void {
	let endMinigameTimer: $ScheduledEvents$ScheduledEvent;
	let minigameTimer: $ScheduledEvents$ScheduledEvent;

	ServerEvents.loaded((event) => {
		const INTERVAL_TICKS = MINUTE_TICKS * 5;

		endMinigameTimer = event.server.scheduleRepeatingInTicks(INTERVAL_TICKS - 1, () => {
			endMinigame({ server: event.server });
		});

		minigameTimer = event.server.scheduleRepeatingInTicks(INTERVAL_TICKS, () => {
			startMinigame(event);
		});
	});

	ServerEvents.unloaded(() => {
		endMinigameTimer.clear();
		minigameTimer.clear();
	});
})();
