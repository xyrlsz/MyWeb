# Java ArrayList（数组列表，类比c++的vector）

ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。

ArrayList 继承了 AbstractList ，并实现了 List 接口。

ArrayList 类位于 java.util 包中，使用前需要引入它，语法格式如下：

```java
import java.util.ArrayList; // 引入 ArrayList 类

ArrayList<E> objectName =new ArrayList<>();　 // 初始化
```

- E: 泛型数据类型，用于设置 objectName 的数据类型，只能为引用数据类型。
- objectName: 对象名。

ArrayList 是一个数组队列，提供了相关的添加、删除、修改、遍历等功能。

## 添加元素
```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

[Google, Runoob, Taobao, Weibo]

## 访问元素

访问 ArrayList 中的元素可以使用 get() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites.get(1));  // 访问第二个元素
    }
}
```
注意：数组的索引值从 0 开始。

以上实例，执行输出结果为：

Runoob

## 修改元素

如果要修改 ArrayList 中的元素可以使用 set() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        sites.set(2, "Wiki"); // 第一个参数为索引位置，第二个为要修改的值
        System.out.println(sites);
    }
}
```
以上实例，执行输出结果为：

[Google, Runoob, Wiki, Weibo]

## 删除元素

如果要删除 ArrayList 中的元素可以使用 remove() 方法：
```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        sites.remove(3); // 删除第四个元素
        System.out.println(sites);
    }
}
```
以上实例，执行输出结果为：

[Google, Runoob, Taobao]

## 计算大小

如果要计算 ArrayList 中的元素数量可以使用 size() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites.size());
    }
}
```

以上实例，执行输出结果为：

4

## 迭代数组列表

我们可以使用 for 来迭代数组列表中的元素：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        for (int i = 0; i < sites.size(); i++) {
            System.out.println(sites.get(i));
        }
    }
}
```

以上实例，执行输出结果为：

Google
Runoob
Taobao
Weibo


也可以使用 for-each 来迭代元素：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
```

## 其他的引用类型
ArrayList 中的元素实际上是对象，在以上实例中，数组列表元素都是字符串 String 类型。

如果我们要存储其他类型，而 <E> 只能为引用数据类型，这时我们就需要使用到基本类型的包装类。

基本类型对应的包装类表如下：

| 基本类型 | 包装类 |
| ------- | ------ |
| byte    | Byte   |
| short   | Short  |
| int     | Integer|
| long    | Long   |
| float   | Float  |
| double  | Double |
| boolean | Boolean|
| char    | Character |

此外，BigInteger、BigDecimal 用于高精度的运算，BigInteger 支持任意精度的整数，也是引用类型，但它们没有相对应的基本类型。

```java
ArrayList<Integer> li=new ArrayList<>();     // 存放整数元素
ArrayList<Character> li=new ArrayList<>();   // 存放字符元素
```

## ArrayList 排序
我们可以使用 Collections.sort() 对 ArrayList 进行排序：
```java
import java.util.ArrayList;
import java.util.Collections;  // 引入 Collections 类

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Taobao");
        sites.add("Wiki");
        sites.add("Runoob");
        sites.add("Weibo");
        sites.add("Google");
        Collections.sort(sites);  // 字母排序
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
```

<hr><h2>Java ArrayList 方法</h2>
<p>Java ArrayList 常用方法列表如下：</p>
<table class="reference">
<tbody><tr>
<th>方法</th>  
<th>描述</th>  
</tr> 
<tr>
<td><a href="https://www.runoob.com/java/java-arraylist-add.html" rel="noopener noreferrer" target="_blank">add()</a></td>  
<td>将元素插入到指定位置的 arraylist 中</td> 
</tr>   
<tr>
<td><a href="https://www.runoob.com/java/java-arraylist-addall.html" rel="noopener noreferrer" target="_blank">addAll()</a></td>  
<td>添加集合中的所有元素到 arraylist 中</td> 
</tr> 
<tr>
<td><a href="https://www.runoob.com/java/java-arraylist-clear.html" rel="noopener noreferrer" target="_blank">clear()</a></td>  
<td>删除 arraylist 中的所有元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-clone.html" rel="noopener noreferrer" target="_blank">clone()</a></td>  
    <td>复制一份 arraylist</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-contains.html" rel="noopener noreferrer" target="_blank">contains()</a></td>  
    <td>判断元素是否在 arraylist</td> 
</tr>
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-get.html" rel="noopener noreferrer" target="_blank">get()</a></td>  
    <td>通过索引值获取 arraylist 中的元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-indexof.html" rel="noopener noreferrer" target="_blank">indexOf()</a></td>  
    <td>返回 arraylist 中元素的索引值</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-removeall.html" rel="noopener noreferrer" target="_blank">removeAll()</a></td>  
    <td>删除存在于指定集合中的 arraylist 里的所有元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-remove.html">remove()</a></td>  
    <td>删除 arraylist 里的单个元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-size.html" rel="noopener noreferrer" target="_blank">size()</a></td>  
    <td>返回 arraylist 里元素数量</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-isempty.html" rel="noopener noreferrer" target="_blank">isEmpty()</a></td>  
    <td>判断 arraylist 是否为空</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-sublist.html" rel="noopener noreferrer" target="_blank">subList()</a></td>  
    <td>截取部分 arraylist 的元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-set.html" rel="noopener noreferrer" target="_blank">set()</a></td>  
    <td>替换 arraylist 中指定索引的元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-sort.html" rel="noopener noreferrer" target="_blank">sort()</a></td>  
    <td>对 arraylist 元素进行排序</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-toarray.html" rel="noopener noreferrer" target="_blank">toArray()</a></td>  
    <td>将 arraylist 转换为数组</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-tostring.html" rel="noopener noreferrer" target="_blank">toString()</a></td>  
    <td>将 arraylist 转换为字符串</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-surecapacity.html" rel="noopener noreferrer" target="_blank">ensureCapacity</a>()</td>  
    <td>设置指定容量大小的 arraylist</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-lastindexof.html" rel="noopener noreferrer" target="_blank">lastIndexOf()</a></td>  
    <td>返回指定元素在 arraylist 中最后一次出现的位置</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-retainall.html" rel="noopener noreferrer" target="_blank">retainAll()</a></td>  
    <td>保留 arraylist 中在指定集合中也存在的那些元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-containsall.html" rel="noopener noreferrer" target="_blank">containsAll()</a></td>  
    <td>查看 arraylist 是否包含指定集合中的所有元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-trimtosize.html" rel="noopener noreferrer" target="_blank">trimToSize()</a></td>  
    <td>将 arraylist 中的容量调整为数组中的元素个数</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-removerange.html" rel="noopener noreferrer" target="_blank">removeRange()</a></td>  
    <td>删除 arraylist 中指定索引之间存在的元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-replaceall.html" rel="noopener noreferrer" target="_blank">replaceAll()</a></td>  
    <td>将给定的操作内容替换掉数组中每一个元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-removeif.html" rel="noopener noreferrer" target="_blank">removeIf()</a></td>  
    <td>删除所有满足特定条件的 arraylist 元素</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-arraylist-foreach.html" rel="noopener noreferrer" target="_blank">forEach()</a></td>  
    <td>遍历 arraylist 中每一个元素并执行特定操作</td> 
</tr> 
</tbody></table>
<p>
更多 API 方法可以查看：<a href="https://www.runoob.com/manual/jdk11api/java.base/java/util/ArrayList.html" rel="noopener noreferrer" target="_blank">https://www.runoob.com/manual/jdk11api/java.base/java/util/ArrayList.html</a></p>