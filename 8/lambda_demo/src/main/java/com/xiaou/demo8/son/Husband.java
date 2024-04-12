package com.xiaou.demo8.son;

public class Husband {
    public void buyHouse() {
        System.out.println("buyhouse");
    }

    public void marry(Richable richable) {
        richable.buy();
    }

    public void soHappy() {
        marry(this::buyHouse);
    }
}
