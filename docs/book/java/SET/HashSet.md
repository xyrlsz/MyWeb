# Java HashSet
<p>
HashSet 基于 HashMap 来实现的，是一个不允许有重复元素的集合。</p><p>
    HashSet 允许有 null 值。</p>
<p>HashSet 是无序的，即不会记录插入的顺序。</p> <p>
HashSet 不是线程安全的， 如果多个线程尝试同时修改 HashSet，则最终结果是不确定的。 您必须在多线程访问时显式同步对 HashSet 的并发访问。
</p><p>
 HashSet 实现了 Set 接口。</p>
<p><img decoding="async" src="https://www.runoob.com/wp-content/uploads/2020/07/java-hashset-hierarchy.png"></p>

<p>HashSet 中的元素实际上是对象，一些常见的基本类型可以使用它的包装类。</p><p>
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
<p>HashSet 类位于 java.util 包中，使用前需要引入它，语法格式如下：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="typ">HashSet</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 引入 HashSet 类</span><button class="copy-code-button" type="button" data-clipboard-text="import java.util.HashSet; // 引入 HashSet 类"></button></pre>
<p>以下实例我们创建一个 HashSet 对象 sites，用于保存字符串元素：</p>
<pre class="prettyprint prettyprinted" style=""><span class="typ">HashSet</span><span class="pun">&lt;</span><span class="typ">String</span><span class="pun">&gt;</span><span class="pln"> sites </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">HashSet</span><span class="pun">&lt;</span><span class="typ">String</span><span class="pun">&gt;();</span><button class="copy-code-button" type="button" data-clipboard-text="HashSet<String> sites = new HashSet<String>();"></button></pre>

### **添加元素**

我们可以使用 add() 方法向 HashSet 中添加元素，实例如下：

~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");  // 重复的元素不会被添加
        System.out.println(sites);
    }
}
~~~
执行以上代码，输出结果如下：
~~~
[Google, Runoob, Zhihu, Taobao]
~~~

在上面的实例中，Runoob 被添加了两次，它在集合中也只会出现一次，因为集合中的每个元素都必须是唯一的。

### **判断元素是否存在**
~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");  // 重复的元素不会被添加
        System.out.println(sites.contains("Taobao"));
    }
}
~~~
执行以上代码，输出结果如下：
~~~
true
~~~
### **删除元素**
我们可以使用 remove() 方法来删除集合中的元素:
~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        sites.remove("Taobao");  // 删除元素，删除成功返回 true，否则为 false
        System.out.println(sites);
    }
}
~~~
删除集合中所有元素可以使用 clear 方法：

~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        sites.clear();  
        System.out.println(sites);
    }
}
~~~
执行以上代码，输出结果如下：
~~~
[]
~~~

### **计算大小**

如果要计算 HashSet 中的元素数量可以使用 size() 方法：

~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        System.out.println(sites.size());  
    }
}
~~~
执行以上代码，输出结果如下：
~~~
4
~~~
### **迭代 HashSet**
可以使用 for-each 来迭代 HashSet 中的元素。
~~~java
// 引入 HashSet 类      
import java.util.HashSet;

public class RunoobTest {
    public static void main(String[] args) {
    HashSet<String> sites = new HashSet<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");
        sites.add("Runoob");     // 重复的元素不会被添加
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
~~~
执行以上代码，输出结果如下：
~~~
Google
Runoob
Zhihu
Taobao
~~~
<p>
更多 API 方法可以查看：<a href="https://www.runoob.com/manual/jdk11api/java.base/java/util/HashSet.html" rel="noopener noreferrer" target="_blank">https://www.runoob.com/manual/jdk11api/java.base/java/util/HashSet.html</a></p>
<p><a href="https://www.runoob.com/java/java-collections.html"><img decoding="async" class="navup" src="https://www.runoob.com/images/up.gif" alt="Java 集合框架"> Java 集合框架</a></p>		




