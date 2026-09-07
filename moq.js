//subscribe
const id = "awef";
const Moq = await import("https://esm.sh/@moq/net");

const connection = await Moq.Connection.connect(
	new URL("https://cdn.moq.pro/anon")
);

const consumer = connection
	.consume(Moq.Path.from(id))
	.track("messages")
	.subscribe({ priority: 0 });

console.log("Subscriber connected");

while (true) {
	const group = await consumer.recvGroup();

	if (group) {
		console.log("Received:", await group.readString());
	}
}

//publish
const id = "awef";
const Moq = await import("https://esm.sh/@moq/net");

const connection = await Moq.Connection.connect(
	new URL("https://cdn.moq.pro/anon")
);

const broadcast = new Moq.Broadcast.Producer();
connection.publish(Moq.Path.from(id), broadcast);

const track = broadcast.createTrack("messages");

console.log("Publisher connected");

while (true) {
	const message = `Hello ${Math.random().toString(36).slice(2)}`;

	const group = track.appendGroup();
	group.writeString(message);
	group.close();

	console.log("Sent:", message);

	await new Promise(resolve => setTimeout(resolve, 1000));
}
