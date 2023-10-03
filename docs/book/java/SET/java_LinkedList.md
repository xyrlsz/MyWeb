# Java LinkedList

<p>链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的地址。</p><p>
链表可分为单向链表和双向链表。</p>
<p>一个单向链表包含两个值: 当前节点的值和一个指向下一个节点的链接。</p>
<p><img decoding="async" src="https://www.runoob.com/wp-content/uploads/2020/06/408px-Singly-linked-list.svg_.png"></p>

<p>一个双向链表有三个整数值: 数值、向后的节点链接、向前的节点链接。</p>

<p><img decoding="async" src="https://www.runoob.com/wp-content/uploads/2020/06/610px-Doubly-linked-list.svg_.png"></p>
<p>Java LinkedList（链表） 类似于 ArrayList，是一种常用的数据容器。</p>


<p>与 ArrayList 相比，LinkedList 的增加和删除的操作效率更高，而查找和修改的操作效率较低。</p>
<p>

<strong>以下情况使用 ArrayList :</strong></p>
<ul>
<li>
频繁访问列表中的某一个元素。</li><li>
只需要在列表末尾进行添加和删除元素操作。</li></ul>
<p><strong>以下情况使用 LinkedList :</strong></p>
<ul>
<li>
你需要通过循环迭代来访问列表中的某些元素。</li><li>
需要频繁的在列表开头、中间、末尾等位置进行添加和删除元素操作。</li></ul>
<p>LinkedList 继承了 AbstractSequentialList 类。</p><p>
LinkedList 实现了 Queue 接口，可作为队列使用。</p><p>
LinkedList 实现了 List 接口，可进行列表的相关操作。</p><p>
LinkedList 实现了 Deque 接口，可作为队列使用。</p><p>
LinkedList 实现了 Cloneable 接口，可实现克隆。</p><p>
LinkedList 实现了 java.io.Serializable 接口，即可支持序列化，能通过序列化去传输。</p><p>
<img decoding="async" src="https://www.runoob.com/wp-content/uploads/2020/06/linkedlist-2020-11-16.png"></p>



<p>
LinkedList 类位于 java.util 包中，使用前需要引入它，语法格式如下：</p>

```java
// 引入 LinkedList 类
import java.util.LinkedList; 

LinkedList<E> list = new LinkedList<E>();   // 普通创建方法
```

或者：
```java
LinkedList<E> list = new LinkedList(Collection<? extends E> c); // 使用集合创建链表
```

创建一个简单的链表实例：

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites);
    }
}
```
以上实例，执行输出结果为：
```
[Google, Runoob, Taobao, Weibo]
```

更多的情况下我们使用 ArrayList 访问列表中的随机元素更加高效，但以下几种情况 LinkedList 提供了更高效的方法。

在列表开头添加元素：
```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        // 使用 addFirst() 在头部添加元素
        sites.addFirst("Wiki");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：
```
[Wiki, Google, Runoob, Taobao]
```
在列表结尾添加元素：
```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        // 使用 addLast() 在尾部添加元素
        sites.addLast("Wiki");
        System.out.println(sites);
    }
}
```
以上实例，执行输出结果为：
```
[Google, Runoob, Taobao, Wiki]
```

在列表开头移除元素：
```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 removeFirst() 移除头部元素
        sites.removeFirst();
        System.out.println(sites);
    }
}
```
以上实例，执行输出结果为：
```
[Runoob, Taobao, Weibo]
```

在列表结尾移除元素：
~~~java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 removeLast() 移除尾部元素
        sites.removeLast();
        System.out.println(sites);
    }
}
~~~

以上实例，执行输出结果为：
~~~
[Google, Runoob, Taobao]
~~~

获取列表开头的元素：
~~~java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 getFirst() 获取头部元素
        System.out.println(sites.getFirst());
    }
}
~~~

以上实例，执行输出结果为：
~~~
Google
~~~

获取列表的末尾元素：
~~~java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 getLast() 获取尾部元素
        System.out.println(sites.getLast());
    }
}
~~~
以上实例，执行输出结果为：
~~~
Weibo
~~~

### **迭代元素**

我们可以使用 for 配合 size() 方法来迭代列表中的元素：

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        for (int size = sites.size(), i = 0; i < size; i++) {
            System.out.println(sites.get(i));
        }
    }
}
```
size() 方法用于计算链表的大小。

以上实例，执行输出结果为：
~~~
Google
Runoob
Taobao
Weibo
~~~

也可以使用 for-each 来迭代元素：
~~~java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
~~~


<h3>常用方法</h3>
<table class="reference">
<tbody><tr><th>方法</th><th>描述</th></tr><tr><td>
public boolean add(E e)</td><td>链表末尾添加元素，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public void add(int index, E element)</td><td>向指定位置插入元素。</td></tr><tr><td>
public boolean addAll(Collection<!--? extends E--> c)</td><td>将一个集合的所有元素添加到链表后面，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public boolean addAll(int index, Collection<!--? extends E--> c)</td><td>将一个集合的所有元素添加到链表的指定位置后面，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public void addFirst(E e)</td><td>元素添加到头部。</td></tr><tr><td>
public void addLast(E e)</td><td>元素添加到尾部。</td></tr><tr><td>
public boolean offer(E e)</td><td>向链表末尾添加元素，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public boolean offerFirst(E e)</td><td>头部插入元素，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public boolean offerLast(E e)</td><td>尾部插入元素，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>

public void clear()</td><td>清空链表。</td></tr><tr><td>
public E removeFirst()</td><td>删除并返回第一个元素。</td></tr><tr><td>
public E removeLast()</td><td>删除并返回最后一个元素。</td></tr><tr><td>
public boolean remove(Object o)</td><td>删除某一元素，返回是否成功，成功为 true，失败为 false。</td></tr><tr><td>
public E remove(int index)</td><td>删除指定位置的元素。</td></tr><tr><td>
public E poll()</td><td>删除并返回第一个元素。</td></tr><tr><td>
public E remove()</td><td>删除并返回第一个元素。</td></tr><tr><td>

public boolean contains(Object o)</td><td>判断是否含有某一元素。</td></tr><tr><td>
public E get(int index)</td><td>返回指定位置的元素。</td></tr><tr><td>
public E getFirst()</td><td>返回第一个元素。</td></tr><tr><td>
public E getLast()</td><td>返回最后一个元素。</td></tr><tr><td>
public int indexOf(Object o)</td><td>查找指定元素从前往后第一次出现的索引。</td></tr><tr><td>
public int lastIndexOf(Object o)</td><td>查找指定元素最后一次出现的索引。</td></tr><tr><td>
public E peek()</td><td>返回第一个元素。</td></tr><tr><td>
public E element()</td><td>返回第一个元素。</td></tr><tr><td>
public E peekFirst()</td><td>返回头部元素。</td></tr><tr><td>
public E peekLast()</td><td>返回尾部元素。</td></tr><tr><td>
public E set(int index, E element)</td><td>设置指定位置的元素。</td></tr><tr><td>
public Object clone()</td><td>克隆该列表。</td></tr><tr><td>
public Iterator<e> descendingIterator()</e></td><td>返回倒序迭代器。</td></tr><tr><td>
public int size()</td><td>返回链表元素个数。</td></tr><tr><td>
public ListIterator<e> listIterator(int index)</e></td><td>返回从指定位置开始到末尾的迭代器。</td></tr><tr><td>
public Object[] toArray()</td><td>返回一个由链表元素组成的数组。</td></tr><tr><td>
public <t> T[] toArray(T[] a)</t></td><td>返回一个由链表元素转换类型而成的数组。</td></tr></tbody></table>
<p>
更多 API 方法可以查看：<a href="https://www.runoob.com/manual/jdk11api/java.base/java/util/LinkedList.html" rel="noopener noreferrer" target="_blank">https://www.runoob.com/manual/jdk11api/java.base/java/util/LinkedList.html</a></p>
<p>
</p>