package com.xiaou.demo2;

import java.util.function.Supplier;

/**
 * 求数组最大值
 */
public class SupplierLambda {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        int max = getMax(() -> {
            int temp = arr[0];
            for (int i : arr) {
                if (i > temp) {
                    temp = i;
                }
            }
            return temp;
        });
        System.out.println(max);
    }

    public static int getMax(Supplier<Integer> supplier) {
        return supplier.get();
    }
}
