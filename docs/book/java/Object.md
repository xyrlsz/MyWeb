# Java Object 类

Java Object 类是所有类的父类，也就是说 Java 的所有类都继承了 Object，**子类可以使用 Object 的所有方法**。

![Object示意图](https://www.runoob.com/wp-content/uploads/2020/10/classes-object.gif)

Object 类位于 java.lang 包中，编译时会自动导入，我们创建一个类时，如果没有明确继承一个父类，那么它就会自动继承 Object，成为 Object 的子类。

Object 类可以显式继承，也可以隐式继承，以下两种方式是一样的：

显式继承:
~~~java
public class Runoob extends Object{

}
~~~

隐式继承:
~~~java
public class Runoob {

}
~~~


### 类的构造函数

| 序号 | 构造方法 & 描述                        |
| ---- | ------------------------------------- |
| 1    | **Object()**                           |
|      | 构造一个新对象。                        |

### 类的方法

| 序号 | 方法 & 描述                            |
| ---- | ------------------------------------- |
| 1    | [protected Object clone()](https://www.runoob.com/java/java-object-clone.html) |
|      | 创建并返回一个对象的拷贝                |
| 2    | [boolean equals(Object obj)](https://www.runoob.com/java/java-object-equals.html) |
|      | 比较两个对象是否相等                    |
| 3    | [protected void finalize()](https://www.runoob.com/java/java-object-finalize.html) |
|      | 当GC（垃圾回收器）确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。 |
| 4    | [Class<?> getClass()](https://www.runoob.com/java/java-object-getclass.html) |
|      | 获取对象的运行时对象的类                |
| 5    | [int hashCode()](https://www.runoob.com/java/java-object-hashcode.html) |
|      | 获取对象的哈希值                        |
| 6    | [void notify()](https://www.runoob.com/java/java-object-notify.html) |
|      | 唤醒在该对象上等待的某个线程              |
| 7    | [void notifyAll()](https://www.runoob.com/java/java-object-notifyall.html) |
|      | 唤醒在该对象上等待的所有线程              |
| 8    | [String toString()](https://www.runoob.com/java/java-object-tostring.html) |
|      | 返回对象的字符串表示形式                |
| 9    | [void wait()](https://www.runoob.com/java/java-object-wait.html) |
|      | 让当前线程进入等待状态，直到其他线程调用此对象的notify()方法或notifyAll()方法。 |
| 10   | [void wait(long timeout)](https://www.runoob.com/java/java-object-wait-timeout.html) |
|      | 让当前线程处于等待（阻塞）状态，直到其他线程调用此对象的notify()方法或notifyAll()方法，或者超过参数设置的timeout超时时间。 |
| 11   | [void wait(long timeout, int nanos)](https://www.runoob.com/java/java-object-wait-nanos.html) |
|      | 与wait(long timeout)方法类似，多了一个nanos参数，这个参数表示额外时间（以纳秒为单位，范围是0-999999）。所以超时的时间还需要加上nanos纳秒。 |


