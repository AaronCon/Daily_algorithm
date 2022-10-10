// 定义链表节点
class Node {
  constructor(element) {
    this.value = element
    this.next = null
  }
}

// 单项链表
class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  // 增加元素
  append(element) {
    let node = new Node(element)
    if(this.head === null) {
      this.head = node
    } else {
      let current = this.getNode(this.size - 1)
      current.next = node
    }
    this.size++
  }
  // 指定位置插入元素 position表示小标位置
  insert(element, position) {
    if(position < 0 || position > this.size) {
      throw new Error('position not fill range')
    }
    let node = new Node(element)
    if(position === 0) {
      node.next = this.head
      this.head = node
    } else {
      let pre = this.getNode(position - 1)
      node.next = pre.next
      pre.next = node
    }
    this.size++
  }
  // 获取指定未知的节点
  getNode(index) {
    if(index < 0 || index >= this.size) {
      throw new Error("out range")
    }
    let current = this.head
    for(let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }
  // 移除指定项
  removeAt(position) {
    if(position < 0 || position >= this.size) {
      throw new Error("out range")
    } else {
      if(position === 0) {
        this.size--
        return this.head = this.head.next
      }
      let pre = this.getNode(position - 1)
      pre.next = pre.next.next
      this.size--
    }
  }
  // 移除指定元素
  remove(element) {
    let index = this.indexOf(element)
    this.removeAt(index)
  }
  // 查找指定元素值返回索引
  indexOf(element) {
    let current = this.head
    for(let i = 0; i < this.size; i++) {
      if(current.value === element) return i
      current = current.next
    }
    return -1
  }
  // 判断是否为空
  isEmpty() {
    return this.size === 0
  }
  // 获取链表长度
  length() {
    return this.size
  }
  // 清空链表
  clear() {
    for(let i = 0; i < this.size; i++) {
      this.removeAt(i)
    }
    this.size = 0
    this.head = null
  }
  // 获取链表的值
  print() {
    let current = this.head
    for(let i = 0; i < this.size; i++) {
      console.log(current.value)
      current = current.next
    }
  }

}

// 测试函数
(function LinkedListTest() {
  let l = new LinkedList();
  l.append(1);
  l.append(2);
  l.append(3);
  l.print();
  console.log('-------')

  l.insert(4, 0)
  l.print()
  console.log('-------')

  l.remove(1)
  l.print()
  console.log('-------')

  l.removeAt(0)
  l.print()
  console.log('-------')

  console.log(l.isEmpty())
  console.log('-------')

  console.log(l.length())
  console.log('-------')

  l.clear()
  l.print()
  console.log('-------')
})();