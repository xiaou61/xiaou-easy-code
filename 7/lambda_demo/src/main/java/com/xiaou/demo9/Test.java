package com.xiaou.demo9;

public class Test {
    public static void main(String[] args) {
        int[] arr1 = createArray(10, int[]::new);
    }

    public static int[] createArray(int size, ArrayBuilder arrayBuilder) {
        return arrayBuilder.builderArray(size);
    }
}
