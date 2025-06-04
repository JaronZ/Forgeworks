import { startMinigame, endMinigame } from "./minigames/init";

ServerEvents.commandRegistry((event) => {
	const { commands: Commands } = event;

	event.register(
		Commands.literal("minigame")
			.requires((s) => s.hasPermission(2))
			.then(
				Commands.literal("end").executes(
					(c) => (
						endMinigame({
							server: c.source.server
						}),
						1
					)
				)
			)
			.then(Commands.literal("start").executes((c) => (startMinigame(c.source), 1)))
	);
});
