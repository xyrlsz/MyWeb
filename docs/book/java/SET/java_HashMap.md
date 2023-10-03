# Java HashMap

<p>
HashMap 是一个散列表，它存储的内容是键值对(key-value)映射。</p><p>
HashMap 实现了 Map 接口，根据键的 HashCode 值存储数据，具有很快的访问速度，最多允许一条记录的键为 null，不支持线程同步。</p>
<p>
HashMap 是无序的，即不会记录插入的顺序（即会自动排序）。</p>
<p>
HashMap 继承于AbstractMap，实现了 Map、Cloneable、java.io.Serializable 接口。</p>
<p><img decoding="async" src="https://www.runoob.com/wp-content/uploads/2020/07/WV9wXLl.png"></p>
<p>
HashMap 的 key 与 value 类型可以相同也可以不同，可以是字符串（String）类型的 key 和 value，也可以是整型（Integer）的 key 和字符串（String）类型的 value。</p>


<p><img decoding="async" src="https://static.runoob.com/images/mix/java-map.svg"></p>
<p>
HashMap 中的元素实际上是对象，一些常见的基本类型可以使用它的包装类。</p><p>
基本类型对应的包装类表如下：</p>
<table class="reference">
    <thead>
    <tr><th>基本类型</th><th>引用类型</th></tr>
    </thead>
    <tbody>
    <tr><td>boolean</td><td>Boolean</td></tr>
    <tr><td>byte</td><td>Byte</td></tr>
    <tr><td>short</td><td>Short</td></tr>
    <tr><td>int</td><td>Integer</td></tr>
    <tr><td>long</td><td>Long</td></tr>
    <tr><td>float</td><td>Float</td></tr>
    <tr><td>double</td><td>Double</td></tr>
    <tr><td>char</td><td>Character</td></tr>
    </tbody>
    </table>
<p>HashMap 类位于 java.util 包中，使用前需要引入它，语法格式如下：</p>

~~~java
import java.util.HashMap; // 引入 HashMap 类
~~~

以下实例我们创建一个 HashMap 对象 Sites， 整型（Integer）的 key 和字符串（String）类型的 value：
~~~java
HashMap<Integer, String> Sites = new HashMap<Integer, String>();
~~~

### **添加元素**
HashMap 类提供了很多有用的方法，添加键值对(key-value)可以使用 put() 方法:
~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites);
    }
}
~~~
执行以上代码，输出结果如下：
~~~
{1=Google, 2=Runoob, 3=Taobao, 4=Zhihu}
~~~
以下实例创建一个字符串（String）类型的 key 和字符串（String）类型的 value：
~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<String, String> Sites = new HashMap<String, String>();
        // 添加键值对
        Sites.put("one", "Google");
        Sites.put("two", "Runoob");
        Sites.put("three", "Taobao");
        Sites.put("four", "Zhihu");
        System.out.println(Sites);
    }
}
~~~
执行以上代码，输出结果如下：
~~~
{four=Zhihu, one=Google, two=Runoob, three=Taobao}
~~~
### **访问元素**

我们可以使用 get(key) 方法来获取 key 对应的 value:

~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites.get(3));
    }
}
~~~

执行以上代码，输出结果如下：
~~~
Taobao
~~~

### **删除元素**

我们可以使用 remove(key) 方法来删除 key 对应的键值对(key-value):

~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        Sites.remove(4);
        System.out.println(Sites);
    }
}
~~~
删除所有键值对(key-value)可以使用 clear 方法：

~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        Sites.clear();
        System.out.println(Sites);
    }
}
~~~

执行以上代码，输出结果如下：
~~~
{}
~~~

### **计算大小**

如果要计算 HashMap 中的元素数量可以使用 size() 方法：
~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        System.out.println(Sites.size());
    }
}
~~~

执行以上代码，输出结果如下：
~~~
4
~~~

### **迭代 HashMap**
可以使用 for-each 来迭代 HashMap 中的元素。

如果你只想获取 key，可以使用 keySet() 方法，然后可以通过 get(key) 获取对应的 value，如果你只想获取 value，可以使用 values() 方法。
~~~java
// 引入 HashMap 类      
import java.util.HashMap;

public class RunoobTest {
    public static void main(String[] args) {
        // 创建 HashMap 对象 Sites
        HashMap<Integer, String> Sites = new HashMap<Integer, String>();
        // 添加键值对
        Sites.put(1, "Google");
        Sites.put(2, "Runoob");
        Sites.put(3, "Taobao");
        Sites.put(4, "Zhihu");
        // 输出 key 和 value
        for (Integer i : Sites.keySet()) {
            System.out.println("key: " + i + " value: " + Sites.get(i));
        }
        // 返回所有 value 值
        for(String value: Sites.values()) {
          // 输出每一个value
          System.out.print(value + ", ");
        }
    }
}
~~~

执行以上代码，输出结果如下：
~~~
key: 1 value: Google
key: 2 value: Runoob
key: 3 value: Taobao
key: 4 value: Zhihu
Google, Runoob, Taobao, Zhihu,
~~~
### **Java HashMap 方法**   
Java HashMap 常用方法列表如下：

<table class="reference">
<tbody><tr>
<th>方法</th>  
<th>描述</th>  
</tr> 
<tr>
<td><a href="https://www.runoob.com/java/java-hashmap-clear.html" rel="noopener noreferrer" target="_blank">clear()</a></td>  
<td>删除 hashMap 中的所有键/值对</td> 
</tr>   
<tr>
<td><a href="https://www.runoob.com/java/java-hashmap-clone.html" rel="noopener noreferrer" target="_blank">clone()</a></td>  
<td>复制一份 hashMap</td> 
</tr> 
<tr>
<td><a href="https://www.runoob.com/java/java-hashmap-isempty.html" rel="noopener noreferrer" target="_blank">isEmpty()</a></td>  
<td>判断 hashMap 是否为空</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-size.html" rel="noopener noreferrer" target="_blank">size()</a></td>  
    <td>计算 hashMap 中键/值对的数量</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-put.html" rel="noopener noreferrer" target="_blank">put()</a></td>  
    <td>将键/值对添加到 hashMap 中</td> 
</tr>
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-putall.html" rel="noopener noreferrer" target="_blank">putAll()</a></td>  
    <td>将所有键/值对添加到 hashMap 中</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-putifabsent.html" rel="noopener noreferrer" target="_blank">putIfAbsent()</a></td>  
    <td>如果 hashMap 中不存在指定的键，则将指定的键/值对插入到 hashMap 中。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-remove.html" rel="noopener noreferrer" target="_blank">remove()</a></td>  
    <td>删除 hashMap 中指定键 key 的映射关系</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-containskey.html">containsKey()</a></td>  
    <td>检查 hashMap 中是否存在指定的 key 对应的映射关系。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-containsvalue.html" rel="noopener noreferrer" target="_blank">containsValue()</a></td>  
    <td>检查 hashMap 中是否存在指定的 value 对应的映射关系。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-replace.html" rel="noopener noreferrer" target="_blank">replace()</a></td>  
    <td>替换 hashMap 中是指定的 key 对应的 value。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-replaceall.html" rel="noopener noreferrer" target="_blank">replaceAll()</a></td>  
    <td>将 hashMap 中的所有映射关系替换成给定的函数所执行的结果。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-get.html" rel="noopener noreferrer" target="_blank">get()</a></td>  
    <td>获取指定 key 对应对 value</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-getordefault.html" rel="noopener noreferrer" target="_blank">getOrDefault()</a></td>  
    <td>获取指定 key 对应对 value，如果找不到 key ，则返回设置的默认值</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-foreach.html" rel="noopener noreferrer" target="_blank">forEach()</a></td>  
    <td>对 hashMap 中的每个映射执行指定的操作。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-entryset.html" rel="noopener noreferrer" target="_blank">entrySet()</a></td>  
    <td>返回 hashMap 中所有映射项的集合集合视图。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-keyset.html" rel="noopener noreferrer" target="_blank">keySet</a>()</td>  
    <td>返回 hashMap 中所有 key 组成的集合视图。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-values.html" rel="noopener noreferrer" target="_blank">values()</a></td>  
    <td>返回 hashMap 中存在的所有 value 值。</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-merge.html" rel="noopener noreferrer" target="_blank">merge()</a></td>  
    <td>添加键值对到 hashMap 中</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-compute.html" rel="noopener noreferrer" target="_blank">compute()</a></td>  
    <td>对 hashMap 中指定 key 的值进行重新计算</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-computeifabsent.html" rel="noopener noreferrer" target="_blank">computeIfAbsent()</a></td>  
    <td>对 hashMap 中指定 key 的值进行重新计算，如果不存在这个 key，则添加到 hasMap 中</td> 
</tr> 
<tr>
    <td><a href="https://www.runoob.com/java/java-hashmap-computeifpresent.html" rel="noopener noreferrer" target="_blank">computeIfPresent()</a></td>  
    <td>对 hashMap 中指定 key 的值进行重新计算，前提是该 key 存在于 hashMap 中。</td> 
</tr> 
</tbody></table>
<p>
更多 API 方法可以查看：<a href="https://www.runoob.com/manual/jdk11api/java.base/java/util/HashMap.html" rel="noopener noreferrer" target="_blank">https://www.runoob.com/manual/jdk11api/java.base/java/util/HashMap.html</a></p>


<p><a href="https://www.runoob.com/java/java-collections.html">Java 集合框架</a></p>	