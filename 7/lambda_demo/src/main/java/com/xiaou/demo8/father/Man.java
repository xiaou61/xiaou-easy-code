package com.xiaou.demo8.father;

public class Man extends Human {
    @Override
    public void say() {
        System.out.println("xiaou say");
    }

    public void method(Greetable g) {
        g.greet();
    }

    public void show() {
        method(super::say);
    }
}
