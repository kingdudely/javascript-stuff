// compact
function writeVarInt(value, outputBuffer, offset = 0) {
	do {
		outputBuffer[offset++] = (value & 127) | ((value > 127) << 7);
	} while (value >>>= 7);
  
	return offset;
}

// compact bigint
function writeVarInt(value, outputBuffer, offset = 0n) { 
	value = BigInt(value);
	
	do {
		outputBuffer[offset++] = Number((value & 127n) | (BigInt(value > 127n) << 7n));
	} while (value >>= 7n);
		
	return offset;
}

// no bitwise operations
function writeVarInt(value, outputBuffer, offset = 0) {
	value = Math.floor(value); 
	
	while (value >= 128) {
		outputBuffer[offset++] = (value % 128) + 128;
		value = Math.floor(value / 128); 
	}
	
	outputBuffer[offset++] = value;
	return offset;
}


