# XYR的BOOK
这是第一个网站   
~~意义重大~~


## 线性表

### 链表

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：

- 存储数据元素的数据域
- 存储下一个结点地址的指针域

链表分类
- 单向链表 
- 双向链表
- 循环链表
- 双向循环链表


### 单向链表

单向链表是链表的一种，链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点组成，结点可以在运行时动态生成。每个结点包括两个部分：

- 存储数据元素的数据域
- 存储下一个结点地址的指针域

单向链表结构
```cpp
struct ListNode {
    int val;
    struct ListNode *next;
    ListNode():val(0), next(NULL) {}
    ListNode(int x):val(x), next(NULL) {}
    ListNode(int x, ListNode *next):val(x), next(next) {}
    ListNode(const ListNode &node):val(node.val), next(node.next) {}
};

```

### 双向链表

双向链表是链表的一种，链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点组成，结点可以在运行时动态生成。每个结点包括三个部分：

- 存储数据元素的数据域
- 存储下一个结点地址的指针域
- 存储上一个结点地址的指针域

双向链表结构
```cpp
struct ListNode {
    int val;
    struct ListNode *next;
    struct ListNode *prev;
    ListNode():val(0), next(NULL), prev(NULL) {}
    ListNode(int x):val(x), next(NULL), prev(NULL) {}
    ListNode(int x, ListNode *next, ListNode *prev):val(x), next(next), prev(prev) {}
    ListNode(const ListNode &node):val(node.val), next(node.next), prev(node.prev) {}
};

```

### 循环链表 
循环链表是链表的一种，链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。循环链表头尾相接。链表由一系列结点组成，结点可以在运行时动态生成。每个结点包括两个部分：

- 存储数据元素的数据域
- 存储下一个结点地址的指针域

循环链表结构
- 见上单向链表
- 头尾相接即可

