const until = (condition, timeout = 1) => new Promise(resolve => {
	const interval = setInterval(() => {
		if (condition()) {
        	clearInterval(interval);
            resolve();
        }
	}, timeout);
});
