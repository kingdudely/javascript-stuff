function writeVarInt(value, outputBuffer, offset = 0) { 
	if (!Number.isSafeInteger(value) || value < 0) {
		throw new RangeError(`Invalid/unsafe unsigned integer: ${value}`);
	}

	do {
		outputBuffer[offset++] = (value & 0x7F) | (value > 0x7F ? 0x80 : 0);
	} while ((value = Math.floor(value / 128)) > 0);  

	return offset;
}
// or
function writeVarInt(value, outputBuffer, offset = 0) { 
	if (!Number.isSafeInteger(value) || value < 0) {
		throw new RangeError(`Invalid/unsafe unsigned integer: ${value}`);
	}

	do {
		outputBuffer[offset++] = (value & 0x7F) | ((value > 0x7F) * 0x80);
	} while (value = Math.floor(value / 128));  

	return offset;
}
