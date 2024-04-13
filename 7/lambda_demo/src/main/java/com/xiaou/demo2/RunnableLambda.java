package com.xiaou.demo2;

public class RunnableLambda {
    public static void main(String[] args) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                String name = Thread.currentThread().getName();
                System.out.println(name + "正在运行1");
            }
        }).start();


        //lambda简化
        new Thread(() -> {
            String name = Thread.currentThread().getName();
            System.out.println(name + "正在运行2");
        }).start();
    }
}
