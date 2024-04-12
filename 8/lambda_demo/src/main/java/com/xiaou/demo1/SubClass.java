package com.xiaou.demo1;

public class SubClass implements Factory{
    @Override
    public Object getObject() {
        return new User();

    }
}
