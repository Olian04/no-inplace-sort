Array.prototype.sort = (nativeInplaceSort => function(...args) {
  const arr = [...this]; // Shallow copy
  arr.sort = nativeInplaceSort; // Use native sort 
	return [...arr.sort(...args)]; // Remove native sort
})(Array.prototype.sort);
