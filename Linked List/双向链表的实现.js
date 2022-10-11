// 链表节点
class Node {
  constructor(element) {
    this.value = element
    this.next = null
    this.pre = null
  }
}

// 双向链表
class DoublyLinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  // 向后增加元素
  appendFoot(element) {
    let node = new Node(element)
    if(this.head === null) {
      this.head = node
    } else {
      let current = this.getNode(this.size - 1)
      node.pre = current
      current.next = node
    }
    this.size++
  }
  // 向前增加元素
  appendHead(element) {
    let node = new Node(element)
    if(this.head === null) {
      this.head = node
    } else {
      let current = this.head
      this.head = node
      this.head.next = current
      current.pre = this.head
    }
    this.size++
  }
  // 插入元素(position表示index)
  insert(element, position) {
    if(position < 0 || position > this.size) {
      throw new Error('position range')
    }
    let node = new Node(element)
    if(position === 0 ) {
      this.head.pre = node
      node.next = this.head
      this.head = node
    } else {
      let current = this.getNode(position - 1)
      current.next.pre = node
      node.next = current.next
      current.next = node
      node.pre = current
    }
    this.size++
  }
  // 移除指定位置index的链表
  remove(position) {
    if(position < 0 || position >= this.size) {
      throw new Error('position range')
    }
    if(position === 0) {
      this.head = this.head.next
      this.head.pre = null
    } else {
      let current = this.getNode(position - 1)
      current.next = current.next.next
      current.next.pre = current
    }
    this.size--
  }
  // 获取指定位置的节点
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
  // 查找指定元素返回索引值
  indexOf(element) {
    let current = this.head
    for(let i = 0; i < this.size; i++) {
      if(current.value === element) return i
      current = current.next
    }
    return -1
  }
}

// 测试函数
(() => {
  let l = new DoublyLinkedList
  l.appendFoot(1)
  l.appendHead(3)
  l.insert(4, 0)
  l.insert(5, 1)
  l.remove(1)
  console.log(l.indexOf(4))
  console.dir(l)
})()