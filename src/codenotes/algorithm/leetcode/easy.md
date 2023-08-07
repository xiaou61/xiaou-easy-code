---
# 当前页面内容标题
title: 简单题目
# 当前页面图标
icon: code
# 分类
category:
- 算法
- leetcode
# 标签
tag:
- 算法
- leetcode
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true



---

## 简单题目

## 1.两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```



**提示：**

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**



**进阶：**你可以想出一个时间复杂度小于 `O(n2)` 的算法吗？



**方法一：哈希表**

我们可以用哈希表 `m`存放数组值以及对应的下标。

遍历数组 `nums`，当发现 `target - nums[i]` 在哈希表中，说明找到了目标值，返回 `target - nums[i]` 的下标以及 $i$ 即可。

时间复杂度 `O(n)`，空间复杂度 `O(n)`。其中 `n` 是数组 `nums` 的长度。

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int i = 0;; ++i) {
            int x = nums[i];
            int y = target - x;
            if (m.containsKey(y)) {
                return new int[] {m.get(y), i};
            }
            m.put(x, i);
        }
    }
}
```

**方法二：暴力法**

思路及算法

最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。

当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}
```

## 9.回文数

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

- 例如，`121` 是回文，而 `123` 不是。



**示例 1：**

```
输入：x = 121
输出：true
```

**示例 2：**

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3：**

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```



**提示：**

- `-231 <= x <= 231 - 1`



**进阶：**你能不将整数转为字符串来解决这个问题吗？

**方法一：普通解法**

最好理解的一种解法就是先将 **整数转为字符串** ，然后将字符串分割为数组，只需要循环数组的一半长度进行判断对应元素是否相等即可。

```java
///简单粗暴，看看就行
class Solution {
    public boolean isPalindrome(int x) {
        String reversedStr = (new StringBuilder(x + "")).reverse().toString();
        return (x + "").equals(reversedStr);
    }
}
```

**解法二：进阶解法---数学解法**
通过取整和取余操作获取整数中对应的数字进行比较。

举个例子：1221 这个数字。

通过计算 1221 / 1000， 得首位1
通过计算 1221 % 10， 可得末位 1
进行比较
再将 22 取出来继续比较

```java
class Solution {
    public boolean isPalindrome(int x) {
        //边界判断
        if (x < 0) return false;
        int div = 1;
        
        while (x / div >= 10) div *= 10;
        while (x > 0) {
            int left = x / div;
            int right = x % 10;
            if (left != right) return false;
            x = (x % div) / 10;
            div /= 100;
        }
        return true;
    }
}

```

**方法三：反转一半数字**

我们先判断特殊情况：

- 如果 `x<0`，那么 `x` 不是回文数，直接返回 `false`；
- 如果 `x>0` 且 `x` 的个位数是 0，那么 `x` 不是回文数，直接返回 `false`；
- 如果 `x` 的个位数不是 0，那么 `x` 可能是回文数，继续执行下面的步骤。

我们将 `x` 的后半部分反转，与前半部分进行比较，如果相等，那么 `x` 是回文数，否则 `x` 不是回文数。

举个例子，例如 `x=1221`，我们可以将数字后半部分从 “21” 反转为 “12”，并将其与前半部分 “12” 进行比较，因为二者相等，我们得知数字 `x` 是回文。

让我们看看如何将后半部分反转。

对于数字 12211221，如果执行`1221mod10`，我们将得到最后一位数字 `1`，要得到倒数第二位数字，我们可以先通过除以 `10` 将最后一位数字从 `1221`中移除，1`221/10=122`，再求出上一步结果除以 `10` 的余数，`122 mod 10=2`，就可以得到倒数第二位数字。

如果继续这个过程，我们将得到更多位数的反转数字。

通过将最后一位数字不断地累乘到取出数字的变量 `y` 上，我们可以得到以相反顺序的数字。

在代码实现上，我们可以反复“取出” `x` 的最后一位数字，并将其“添加”到 `y` 的后面，循环直到 `y≥x`，如果此时 `x=y`，或者`x=y/10`，那么 `x` 就是回文数。

时间复杂度 `O(log10(n))`，其中 `n `是 `x`。对于每次迭代，我们会将输入除以 `10`，因此时间复杂度为 `O(log10(n)`。空间复杂度 `O(1)`。

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x > 0 && x % 10 == 0)) {
            return false;
        }
        int y = 0;
        for (; y < x; x /= 10) {
            y = y * 10 + x % 10;
        }
        return x == y || x == y / 10;
    }
}

```



这里的巧妙之处也在于`x%10`中的这个%，例如我们当前的x是1221

那么第一次进入循环`y=0+1221%10`

也就是y=1，也就是最后一位

之后继续取122的最后一位，也就是2

这个时候，y已经是12了。不满足循环条件了，就可以直接退出了。

## 13.罗马数字转整数

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 `2` 写做 `II` ，即为两个并列的 1 。`12` 写做 `XII` ，即为 `X` + `II` 。 `27` 写做 `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。



**示例 1:**

```
输入: s = "III"
输出: 3
```

**示例 2:**

```
输入: s = "IV"
输出: 4
```

**示例 3:**

```
输入: s = "IX"
输出: 9
```

**示例 4:**

```
输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```



**提示：**

- `1 <= s.length <= 15`
- `s` 仅含字符 `('I', 'V', 'X', 'L', 'C', 'D', 'M')`
- 题目数据保证 `s` 是一个有效的罗马数字，且表示整数在范围 `[1, 3999]` 内
- 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
- IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。



```java
class Solution {
    public int romanToInt(String s) {
        String cs = "IVXLCDM";
        int[] vs = {1, 5, 10, 50, 100, 500, 1000};
        Map<Character, Integer> d = new HashMap<>();
        for (int i = 0; i < vs.length; ++i) {
            d.put(cs.charAt(i), vs[i]);
        }
        int n = s.length();
        int ans = d.get(s.charAt(n - 1));
        for (int i = 0; i < n - 1; ++i) {
            int sign = d.get(s.charAt(i)) < d.get(s.charAt(i + 1)) ? -1 : 1;
            ans += sign * d.get(s.charAt(i));
        }
        return ans;
    }
}
```

这个写法用了一个三元表达式巧妙的写出来了，同时这个还可以用一个通俗易懂的方法来写。

```java
class Solution {
    Map<Character, Integer> symbolValues = new HashMap<Character, Integer>() {{
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
    }};

    public int romanToInt(String s) {
        int ans = 0;
        int n = s.length();
        for (int i = 0; i < n; ++i) {
            int value = symbolValues.get(s.charAt(i));
            if (i < n - 1 && value < symbolValues.get(s.charAt(i + 1))) {
                ans -= value;
            } else {
                ans += value;
            }
        }
        return ans;
    }
}

```

这样都是可以的。

## 14.最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。



**示例 1：**

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例 2：**

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```



**提示：**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` 仅由小写英文字母组成

**方法一：字符比较**

我们以第一个字符串 `strs[0]` 为基准，依次比较后面的字符串的第 `i `个字符是否与 `strs[0]` 的第 `i` 个字符相同，如果相同则继续比较下一个字符，否则返回 `strs[0]` 的前 `i` 个字符。

遍历结束，说明所有字符串的前 `i` 个字符都相同，返回 `strs[0] `即可。

时间复杂度`(n×m)`，其中 `n `和 `m` 分别为字符串数组的长度以及字符串的最小长度。空间复杂度 `O(1)`。

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs.length;
        for (int i = 0; i < strs[0].length(); ++i) {
            for (int j = 1; j < n; ++j) {
                if (strs[j].length() <= i || strs[j].charAt(i) != strs[0].charAt(i)) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}
```

**方法二：横向扫描**

这个是leetcode官方提供的解法之一

![image-20230714152407409](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418006.png)

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        String prefix = strs[0];
        int count = strs.length;
        for (int i = 1; i < count; i++) {
            prefix = longestCommonPrefix(prefix, strs[i]);
            if (prefix.length() == 0) {
                break;
            }
        }
        return prefix;
    }

    public String longestCommonPrefix(String str1, String str2) {
        int length = Math.min(str1.length(), str2.length());
        int index = 0;
        while (index < length && str1.charAt(index) == str2.charAt(index)) {
            index++;
        }
        return str1.substring(0, index);
    }
}
```

**方法三：纵向扫描**

方法一是横向扫描，依次遍历每个字符串，更新最长公共前缀。另一种方法是纵向扫描。纵向扫描时，从前往后遍历所有字符串的每一列，比较相同列上的字符是否相同，如果相同则继续对下一列进行比较，如果不相同则当前列不再属于公共前缀，当前列之前的部分为最长公共前缀。

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        int length = strs[0].length();
        int count = strs.length;
        for (int i = 0; i < length; i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < count; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}
```

**方法四：分治**

这个也是官方提供的一种算法，这个是用到了分治的思想

![image-20230714152742730](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418020.png)

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        } else {
            return longestCommonPrefix(strs, 0, strs.length - 1);
        }
    }

    public String longestCommonPrefix(String[] strs, int start, int end) {
        if (start == end) {
            return strs[start];
        } else {
            int mid = (end - start) / 2 + start;
            String lcpLeft = longestCommonPrefix(strs, start, mid);
            String lcpRight = longestCommonPrefix(strs, mid + 1, end);
            return commonPrefix(lcpLeft, lcpRight);
        }
    }

    public String commonPrefix(String lcpLeft, String lcpRight) {
        int minLength = Math.min(lcpLeft.length(), lcpRight.length());       
        for (int i = 0; i < minLength; i++) {
            if (lcpLeft.charAt(i) != lcpRight.charAt(i)) {
                return lcpLeft.substring(0, i);
            }
        }
        return lcpLeft.substring(0, minLength);
    }
}

```

**方法五：二分查找**

![image-20230714152913830](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418193.png)

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        int minLength = Integer.MAX_VALUE;
        for (String str : strs) {
            minLength = Math.min(minLength, str.length());
        }
        int low = 0, high = minLength;
        while (low < high) {
            int mid = (high - low + 1) / 2 + low;
            if (isCommonPrefix(strs, mid)) {
                low = mid;
            } else {
                high = mid - 1;
            }
        }
        return strs[0].substring(0, low);
    }

    public boolean isCommonPrefix(String[] strs, int length) {
        String str0 = strs[0].substring(0, length);
        int count = strs.length;
        for (int i = 1; i < count; i++) {
            String str = strs[i];
            for (int j = 0; j < length; j++) {
                if (str0.charAt(j) != str.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

**方法六：数组排序法**

这个方法主要用到了arrays里面的sort方法。

因为这个对数组进行了排序，所以说，只用比较第一个和最后一个的就可以了，要不然是第一个是最小的，最后一个是最长的，要不然就是第一个是最长的，第二个是最小的。

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) {
            return "";
        }
        Arrays.sort(strs);
        String st = strs[0];
        String en = strs[strs.length - 1];
        int i;
        int num = Math.min(st.length(), en.length());
        for (i = 0; i < num && st.charAt(i) == en.charAt(i); i++) ;
        String res = st.substring(0, i);
        return res;
    }
}

```

## 20.有效的括号

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。



**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```



**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成



**方法一：栈**

遍历括号字符串 `s`，遇到左括号时，压入当前的左括号；遇到右括号时，弹出栈顶元素（若栈为空，直接返回 `false`），判断是否匹配，若不匹配，直接返回 `false`。

也可以选择遇到左括号时，将右括号压入栈中；遇到右括号时，弹出栈顶元素（若栈为空，直接返回 `false`），判断是否是相等。若不匹配，直接返回 `false`。

> 两者的区别仅限于括号转换时机，一个是在入栈时，一个是在出栈时。

遍历结束，若栈为空，说明括号字符串有效，返回 `true`；否则，返回 `false`。

时间复杂度 `O(n)`，空间复杂度 `O(n)`。其中 `n `为括号字符串 `s` 的长度。

```java
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stk = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stk.push(c);
            } else if (stk.isEmpty() || !match(stk.pop(), c)) {
                return false;
            }
        }
        return stk.isEmpty();
    }

    private boolean match(char l, char r) {
        return (l == '(' && r == ')') || (l == '{' && r == '}') || (l == '[' && r == ']');
    }
}
```

## 21.合并两个有序序列

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

![img](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418206.jpg)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

**示例 2：**

```
输入：l1 = [], l2 = []
输出：[]
```

**示例 3：**

```
输入：l1 = [], l2 = [0]
输出：[0]
```



**提示：**

- 两个链表的节点数目范围是 `[0, 50]`

- `-100 <= Node.val <= 100`

- `l1` 和 `l2` 均按 **非递减顺序** 排列

- **方法一：递归**

  我们先判断链表 `l1` 和 `l2` 是否为空，若其中一个为空，则返回另一个链表。否则，我们比较 `l1` 和 `l2` 的头节点：

    - 若 `l1` 的头节点的值小于等于 `l2` 的头节点的值，则递归调用函数 `mergeTwoLists(l1.next,l2)`，并将 `l1` 的头节点与返回的链表头节点相连，返回 `l1` 的头节点。
    - 否则，递归调用函数 `mergeTwoLists(l1,l2.next)`，并将 `l2` 的头节点与返回的链表头节点相连，返回 `l2 `的头节点。

  时间复杂度`O(m+n)`，空间复杂度`O(m+n)`。其中 `m `和 `n` 分别为两个链表的长度。

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }
        if (list2 == null) {
            return list1;
        }
        if (list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
```

**方法二：迭代**

我们也可以用迭代的方式来实现两个排序链表的合并。

我们先定义一个虚拟头节点 `dummy`，然后循环遍历两个链表，比较两个链表的头节点，将较小的节点添加到 `dummy` 的末尾，直到其中一个链表为空，然后将另一个链表的剩余部分添加到 `dummy` 的末尾。

最后返回 `dummy.next` 即可。

时间复杂度 `O(m+n)`，其中 `m` 和 `n `分别为两个链表的长度。忽略答案链表的空间消耗，空间复杂度`O(1`)。

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode();
        ListNode curr = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = list1 == null ? list2 : list1;
        return dummy.next;
    }
}
```

## 26.删除有序数组的重复项

给你一个 **升序排列** 的数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。然后返回 `nums` 中唯一元素的个数。

考虑 `nums` 的唯一元素的数量为 `k` ，你需要做以下事情确保你的题解可以被通过：

- 更改数组 `nums` ，使 `nums` 的前 `k` 个元素包含唯一元素，并按照它们最初在 `nums` 中出现的顺序排列。`nums` 的其余元素与 `nums` 的大小不重要。
- 返回 `k` 。

**判题标准:**

系统会用下面的代码来测试你的题解:

```
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被 **通过**。



**示例 1：**

```
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```



**提示：**

- `1 <= nums.length <= 3 * 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **升序** 排列

**方法一：一次遍历**

我们用一个变量 `k` 记录当前已经处理好的数组的长度，初始时 `k=0`，表示空数组。

然后我们从左到右遍历数组，对于遍历到的每个元素 `x`，如果 `k=0 `或者 `x\\=nums[k−1]`，我们就将 `x `放到`nums[k] `的位置，然后 `k` 自增 1。否则，`x` 与 `nums[k−1] `相同，我们直接跳过这个元素。继续遍历，直到遍历完整个数组。

这样，当遍历结束时，`nums `中前 `k `个元素就是我们要求的答案，且 `k `就是答案的长度。

时间复杂度 `O(n)`，空间复杂度 `O(1)`。其中 `n` 为数组的长度。

补充：

原问题要求最多相同的数字最多出现 11 次，我们可以扩展至相同的数字最多保留 `k` 个。

- 由于相同的数字最多保留 `k `个，那么原数组的前 `k` 个元素我们可以直接保留；

- 对于后面的数字，能够保留的前提是：当前数字 `x `与前面已保留的数字的倒数第 `k `个元素比较，不同则保留，相同则跳过。

-

- ```java
  class Solution {
      public int removeDuplicates(int[] nums) {
          int k = 0;
          for (int x : nums) {
              if (k == 0 || x != nums[k - 1]) {
                  nums[k++] = x;
              }
          }
          return k;
      }
  }
  ```

## 27.移除元素

给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/原地算法)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。



**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```



**示例 1：**

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```



**提示：**

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

**方法一：一次遍历**

我们用变量 `k` 记录当前不等于 `val` 的元素个数。

遍历数组 `nums`，如果当前元素 `x` 不等于 `val`，则将 `x` 赋值给 `nums[k]`，并将 `k` 自增 1。

最后返回 `k` 即可。

时间复杂度 `O(n)`，空间复杂度 `O(1)`。其中 `n` 为数组 `nums` 的长度。

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int x : nums) {
            if (x != val) {
                nums[k++] = x;
            }
        }
        return k;
    }
}
```

## 28.找出字符串中第一个匹配项的下标

<p>给你两个字符串&nbsp;<code>haystack</code> 和 <code>needle</code> ，请你在 <code>haystack</code> 字符串中找出 <code>needle</code> 字符串的第一个匹配项的下标（下标从 0 开始）。如果&nbsp;<code>needle</code> 不是 <code>haystack</code> 的一部分，则返回&nbsp; <code>-1</code><strong> </strong>。</p>

<p>&nbsp;</p>

<p><strong class="example">示例 1：</strong></p>

<pre>
<strong>输入：</strong>haystack = "sadbutsad", needle = "sad"
<strong>输出：</strong>0
<strong>解释：</strong>"sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
</pre>



<p><strong class="example">示例 2：</strong></p>

<pre>
<strong>输入：</strong>haystack = "leetcode", needle = "leeto"
<strong>输出：</strong>-1
<strong>解释：</strong>"leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
</pre>



<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
	<li><code>haystack</code> 和 <code>needle</code> 仅由小写英文字符组成</li>
</ul>


**方法一：遍历**

以字符串 `haystack` 的每一个字符为起点与字符串 `needle` 进行比较，若发现能够匹配的索引，直接返回即可。

假设字符串 `haystack` 长度为 `n`，字符串 `needle` 长度为 `m`，则时间复杂度为 $O((n-m) \times m)$，空间复杂度 $O(1)$。

```java
class Solution {
    public int strStr(String haystack, String needle) {
        int n = haystack.length(), m = needle.length();
        for (int i = 0; i + m <= n; i++) {
            boolean flag = true;
            for (int j = 0; j < m; j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return i;
            }
        }
        return -1;
    }
}
```



**方法二：Rabin-Karp 字符串匹配算法**

[Rabin-Karp 算法](https://zh.wikipedia.org/zh-hans/%E6%8B%89%E5%AE%BE-%E5%8D%A1%E6%99%AE%E7%AE%97%E6%B3%95)本质上是利用滑动窗口配合哈希函数对固定长度的字符串哈希之后进行比较，可以将比较两个字符串是否相同的时间复杂度降为 $O(1)$。

假设字符串 `haystack` 长度为 `n`，字符串 `needle` 长度为 `m`，则时间复杂度为 $O(n+m)$，空间复杂度 $O(1)$。



**方法三：KMP 字符串匹配算法**

假设字符串 `haystack` 长度为 `n`，字符串 `needle` 长度为 `m`，则时间复杂度为 $O(n+m)$，空间复杂度 $O(m)$。

```java
class Solution {
    public int strStr(String haystack, String needle) {
        if ("".equals(needle)) {
            return 0;
        }

        int len1 = haystack.length();
        int len2 = needle.length();
        int p = 0;
        int q = 0;
        while (p < len1) {
            if (haystack.charAt(p) == needle.charAt(q)) {
                if (len2 == 1) {
                    return p;
                }
                ++p;
                ++q;
            } else {
                p -= q - 1;
                q = 0;
            }

            if (q == len2) {
                return p - q;
            }
        }
        return -1;
    }
}
```

关于这个算法的讲解

KMP 解法
KMP 算法是一个快速查找匹配串的算法，它的作用其实就是本题问题：如何快速在「原字符串」中找到「匹配字符串」。

上述的朴素解法，不考虑剪枝的话复杂度是 O(m∗n)O(m * n)O(m∗n) 的，而 KMP 算法的复杂度为 O(m+n)O(m + n)O(m+n)。

KMP 之所以能够在 O(m+n)O(m + n)O(m+n) 复杂度内完成查找，是因为其能在「非完全匹配」的过程中提取到有效信息进行复用，以减少「重复匹配」的消耗。

你可能不太理解，没关系，我们可以通过举 🌰 来理解 KMP。

1. 匹配过程
   在模拟 KMP 匹配过程之前，我们先建立两个概念：

前缀：对于字符串 abcxxxxefg，我们称 abc 属于 abcxxxxefg 的某个前缀。
后缀：对于字符串 abcxxxxefg，我们称 efg 属于 abcxxxxefg 的某个后缀。
然后我们假设原串为 abeababeabf，匹配串为 abeabf：

![image.png](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271733975.png)

我们可以先看看如果不使用 KMP，会如何进行匹配（不使用 substring 函数的情况下）。

首先在「原串」和「匹配串」分别各自有一个指针指向当前匹配的位置。

首次匹配的「发起点」是第一个字符 a。显然，后面的 abeab 都是匹配的，两个指针会同时往右移动（黑标）。

在都能匹配上 abeab 的部分，「朴素匹配」和「KMP」并无不同。

直到出现第一个不同的位置（红标）：

![image.png](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271733147.png)

接下来，正是「朴素匹配」和「KMP」出现不同的地方：

先看下「朴素匹配」逻辑：

1. 将原串的指针移动至本次「发起点」的下一个位置（b 字符处）；匹配串的指针移动至起始位置。

2. 尝试匹配，发现对不上，原串的指针会一直往后移动，直到能够与匹配串对上位置。

如图：

![image.png](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418951.png)

也就是说，对于「朴素匹配」而言，一旦匹配失败，将会将原串指针调整至下一个「发起点」，匹配串的指针调整至起始位置，然后重新尝试匹配。

这也就不难理解为什么「朴素匹配」的复杂度是 O(m∗n)O(m * n)O(m∗n) 了。

然后我们再看看「KMP 匹配」过程：
首先匹配串会检查之前已经匹配成功的部分中里是否存在相同的「前缀」和「后缀」。如果存在，则跳转到「前缀」的下一个位置继续往下匹配：

![9364346F937803F03CD1A0AE645EA0F1.jpg](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418124.jpeg)

跳转到下一匹配位置后，尝试匹配，发现两个指针的字符对不上，并且此时匹配串指针前面不存在相同的「前缀」和「后缀」，这时候只能回到匹配串的起始位置重新开始：

![image.png](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418704.png)

到这里，你应该清楚 KMP 为什么相比于朴素解法更快：

因为 KMP 利用已匹配部分中相同的「前缀」和「后缀」来加速下一次的匹配。

因为 KMP 的原串指针不会进行回溯（没有朴素匹配中回到下一个「发起点」的过程）。

第一点很直观，也很好理解。

我们可以把重点放在第二点上，原串不回溯至「发起点」意味着什么？

其实是意味着：随着匹配过程的进行，原串指针的不断右移，我们本质上是在不断地在否决一些「不可能」的方案。

当我们的原串指针从 i 位置后移到 j 位置，不仅仅代表着「原串」下标范围为 [i,j)[i,j)[i,j) 的字符与「匹配串」匹配或者不匹配，更是在否决那些以「原串」下标范围为 [i,j)[i,j)[i,j) 为「匹配发起点」的子集。

2. 分析实现
   到这里，就结束了吗？要开始动手实现上述匹配过程了吗？

我们可以先分析一下复杂度。如果严格按照上述解法的话，最坏情况下我们需要扫描整个原串，复杂度为 O(n)O(n)O(n)。同时在每一次匹配失败时，去检查已匹配部分的相同「前缀」和「后缀」，跳转到相应的位置，如果不匹配则再检查前面部分是否有相同「前缀」和「后缀」，再跳转到相应的位置 ... 这部分的复杂度是 O(m2)O(m^2)O(m
2
) ，因此整体的复杂度是 O(n∗m2)O(n * m^2)O(n∗m
2
)，而我们的朴素解法是 O(m∗n)O(m * n)O(m∗n) 的。

说明还有一些性质我们没有利用到。

显然，扫描完整原串操作这一操作是不可避免的，我们可以优化的只能是「检查已匹配部分的相同前缀和后缀」这一过程。

再进一步，我们检查「前缀」和「后缀」的目的其实是「为了确定匹配串中的下一段开始匹配的位置」。

同时我们发现，对于匹配串的任意一个位置而言，由该位置发起的下一个匹配点位置其实与原串无关。

举个 🌰，对于匹配串 abcabd 的字符 d 而言，由它发起的下一个匹配点跳转必然是字符 c 的位置。因为字符 d 位置的相同「前缀」和「后缀」字符 ab 的下一位置就是字符 c。

可见从匹配串某个位置跳转下一个匹配位置这一过程是与原串无关的，我们将这一过程称为找 next 点。

显然我们可以预处理出 next 数组，数组中每个位置的值就是该下标应该跳转的目标位置（ next 点）。

当我们进行了这一步优化之后，复杂度是多少呢？

预处理 next 数组的复杂度未知，匹配过程最多扫描完整个原串，复杂度为 O(n)O(n)O(n)。

因此如果我们希望整个 KMP 过程是 O(m+n)O(m + n)O(m+n) 的话，那么我们需要在 O(m)O(m)O(m) 的复杂度内预处理出 next数组。

所以我们的重点在于如何在 O(m)O(m)O(m) 复杂度内处理处 next 数组。

3. next 数组的构建
   接下来，我们看看 next 数组是如何在 O(m)O(m)O(m) 的复杂度内被预处理出来的。

假设有匹配串 aaabbab，我们来看看对应的 next 是如何被构建出来的。



![010FD8AE2B79FFE03DC3735ACD224A6A.png](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418738.png)



![B9497542844478144BED83E9ADA0C12F.png](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271734960.png)



![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271734416.png)



![](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271734891.png)

这就是整个 next 数组的构建过程，时空复杂度均为 O(m)O(m)O(m)。

至此整个 KMP 匹配过程复杂度是 O(m+n)O(m + n)O(m+n) 的。

4. 代码实现
   在实际编码时，通常我会往原串和匹配串头部追加一个空格（哨兵）。

目的是让 j 下标从 0 开始，省去 j 从 -1 开始的麻烦。

整个过程与上述分析完全一致，一些相关的注释我已经写到代码里。

代码：

Java
C++
class Solution {
// KMP 算法
// ss: 原串(string)  pp: 匹配串(pattern)
public int strStr(String ss, String pp) {
if (pp.isEmpty()) return 0;


        // 分别读取原串和匹配串的长度
        int n = ss.length(), m = pp.length();
        // 原串和匹配串前面都加空格，使其下标从 1 开始
        ss = " " + ss;
        pp = " " + pp;
    
        char[] s = ss.toCharArray();
        char[] p = pp.toCharArray();
    
        // 构建 next 数组，数组长度为匹配串的长度（next 数组是和匹配串相关的）
        int[] next = new int[m + 1];
        // 构造过程 i = 2，j = 0 开始，i 小于等于匹配串长度 【构造 i 从 2 开始】
        for (int i = 2, j = 0; i <= m; i++) {
            // 匹配不成功的话，j = next(j)
            while (j > 0 && p[i] != p[j + 1]) j = next[j];
            // 匹配成功的话，先让 j++
            if (p[i] == p[j + 1]) j++;
            // 更新 next[i]，结束本次循环，i++
            next[i] = j;
        }
    
        // 匹配过程，i = 1，j = 0 开始，i 小于等于原串长度 【匹配 i 从 1 开始】
        for (int i = 1, j = 0; i <= n; i++) {
            // 匹配不成功 j = next(j)
            while (j > 0 && s[i] != p[j + 1]) j = next[j];
            // 匹配成功的话，先让 j++，结束本次循环后 i++
            if (s[i] == p[j + 1]) j++;
            // 整一段匹配成功，直接返回下标
            if (j == m) return i - m;
        }
    
        return -1;
    }

}
时间复杂度：n 为原串的长度，m 为匹配串的长度。复杂度为 O(m+n)O(m + n)O(m+n)。
空间复杂度：构建了 next 数组。复杂度为 O(m)O(m)O(m)。
总结
KMP 算法的应用范围要比 Manacher 算法广，Manacher 算法只能应用于「回文串」问题，相对比较局限，而「子串匹配」问题还是十分常见的。

背过这样的算法的意义在于：相当于大脑里有了一个时间复杂度为 O(n)O(n)O(n) 的 api 可以使用，这个 api 传入一个原串和匹配串，返回匹配串在原串的位置。

## 35.搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。



**示例 1:**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

**示例 2:**

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

**示例 3:**

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```



**提示:**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` 为 **无重复元素** 的 **升序** 排列数组
- `-104 <= target <= 104`

**方法一：二分查找**

由于 `nums` 数组已经有序，因此我们可以使用二分查找的方法找到目标值 `target` 的插入位置。

时间复杂度 `O(logn)`，空间复杂度 `O(1)`。其中 `n` 为数组 `nums` 的长度。

```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = (left + right) >>> 1;
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
```

## 58.最后一个单词的长度

给你一个字符串 `s`，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 **最后一个** 单词的长度。

**单词** 是指仅由字母组成、不包含任何空格字符的最大子字符串。



**示例 1：**

```
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
```

**示例 2：**

```
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
```

**示例 3：**

```
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
```



**提示：**

- `1 <= s.length <= 104`
- `s` 仅有英文字母和空格 `' '` 组成
- `s` 中至少存在一个单词

**方法一：逆向遍历 + 双指针**

我们从字符串`s` 末尾开始遍历，找到第一个不为空格的字符，即为最后一个单词的最后一个字符，下标记为 `i`。然后继续向前遍历，找到第一个为空格的字符，即为最后一个单词的第一个字符的前一个字符，记为 `j`。那么最后一个单词的长度即为 `i−j`。

时间复杂度 `O(n)`，其中 `n` 为字符串 `s` 长度。空间复杂度 `O(1)`。

```java
class Solution {
    public int lengthOfLastWord(String s) {
        int i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == ' ') {
            --i;
        }
        int j = i;
        while (j >= 0 && s.charAt(j) != ' ') {
            --j;
        }
        return i - j;
    }
}
```

## 66.加一

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。



**示例 1：**

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

**示例 2：**

```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

**示例 3：**

```
输入：digits = [0]
输出：[1]
```



**提示：**

- `1 <= digits.length <= 100`

- `0 <= digits[i] <= 9`

  它是只加一的所以有可能的情况就只有两种：

  除 999 之外的数字加一；
  数字 999。
  加一得十进一位个位数为 000 加法运算如不出现进位就运算结束了且进位只会是一。

  所以只需要判断有没有进位并模拟出它的进位方式，如十位数加 111 个位数置为 000，如此循环直到判断没有再进位就退出循环返回结果。

  然后还有一些特殊情况就是当出现 999999、999999999 之类的数字时，循环到最后也需要进位，出现这种情况时需要手动将它进一位。

  ```java
  class Solution {
      public int[] plusOne(int[] digits) {
          int n = digits.length;
          for (int i = n - 1; i >= 0; --i) {
              ++digits[i];
              digits[i] %= 10;
              if (digits[i] != 0) {
                  return digits;
              }
          }
          digits = new int[n + 1];
          digits[0] = 1;
          return digits;
      }
  }
  ```



## 67.二进制求和

给你两个二进制字符串 `a` 和 `b` ，以二进制字符串的形式返回它们的和。



**示例 1：**

```
输入:a = "11", b = "1"
输出："100"
```

**示例 2：**

```
输入：a = "1010", b = "1011"
输出："10101"
```



**提示：**

- `1 <= a.length, b.length <= 104`
- `a` 和 `b` 仅由字符 `'0'` 或 `'1'` 组成
- 字符串如果不是 `"0"` ，就不含前导零

**方法一模拟**

![image-20230717164215356](https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308071418913.png)

```java
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder();
        for (int i = a.length() - 1, j = b.length() - 1, carry = 0; i >= 0 || j >= 0 || carry > 0;
             --i, --j) {
            carry += (i >= 0 ? a.charAt(i) - '0' : 0) + (j >= 0 ? b.charAt(j) - '0' : 0);
            sb.append(carry % 2);
            carry /= 2;
        }
        return sb.reverse().toString();
    }
}
```

## 69.X的平方根

给你一个非负整数 `x` ，计算并返回 `x` 的 **算术平方根** 。

由于返回类型是整数，结果只保留 **整数部分** ，小数部分将被 **舍去 。**

**注意：**不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x ** 0.5` 。



**示例 1：**

```
输入：x = 4
输出：2
```

**示例 2：**

```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```



**提示：**

- `0 <= x <= 231 - 1`



二分查找。

```java
class Solution {
    public int mySqrt(int x) {
        int left = 0, right = x;
        while (left < right) {
            int mid = (left + right + 1) >>> 1;
            if (mid <= x / mid) {
                // mid*mid <= x
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}
```

这个是最通俗易懂的方法，但是这个题还有几个关于数学方面的解题思路。

例如官方提供的

![image-20230727173855935](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271738073.png)

![fig1](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271739639.png)

![image-20230727173918531](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271739656.png)

![image-20230727173929441](https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307271739529.png)

代码如下：

```java
class Solution {
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }

        double C = x, x0 = x;
        while (true) {
            double xi = 0.5 * (x0 + C / x0);
            if (Math.abs(x0 - xi) < 1e-7) {
                break;
            }
            x0 = xi;
        }
        return (int) x0;
    }
}

```

