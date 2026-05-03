import { isNativeArray } from '../index'

test('isNativeArray returns true when a native type string ends with array brackets', () => {
	expect(isNativeArray('byte[]')).toBe(true)
	expect(isNativeArray('java.lang.String[]')).toBe(true)
	expect(isNativeArray('byte[][]')).toBe(true)
})

test('isNativeArray returns false when a native type string is not a Java array', () => {
	expect(isNativeArray('java.util.List<java.lang.String>')).toBe(false)
	expect(isNativeArray('java.nio.ByteBuffer')).toBe(false)
	expect(isNativeArray(undefined)).toBe(false)
	expect(isNativeArray(null)).toBe(false)
})

test('isNativeArray accepts CodegenNativeType-like objects', () => {
	expect(isNativeArray({
		nativeType: 'byte[]',
		serializedType: 'byte[]',
		literalType: 'byte[]',
		concreteType: 'byte[]',
		parentType: 'byte[]',
		componentType: null,
		info: null,
		toString: () => 'byte[]',
		equals: () => false,
	})).toBe(true)
})
