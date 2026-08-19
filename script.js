const DATA_STRUCTURES = {
  'array': {
    name: 'Array',
    category: 'linear',
    desc: 'Contiguous memory block with indexed elements and O(1) random access.',
    capacity: 8,
    complexity: {
      time: [
        { op: 'Access by Index', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Search by Value', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' },
        { op: 'Insert at End (Push)', avg: 'O(1)*', worst: 'O(n)', cls: 'comp-o1' },
        { op: 'Insert at Index (Shift)', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' },
        { op: 'Delete by Index (Shift)', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' }
      ],
      space: 'O(n)'
    },
    theory: `
      <h3>Array Architecture</h3>
      <p>An Array is a collection of items stored at <strong>contiguous memory locations</strong>. The memory address of any element at index <code>i</code> is computed directly using:</p>
      <p><code>Address = BaseAddress + (i * ElementSize)</code></p>
      <ul>
        <li><strong>Fixed vs Dynamic:</strong> Static arrays have fixed capacity. Dynamic arrays (like JS Arrays or C++ Vectors) double capacity when full.</li>
        <li><strong>Shifting Cost:</strong> Inserting or deleting in the middle requires shifting all subsequent elements, taking <code>O(n)</code> time.</li>
      </ul>
    `
  },
  'linked-list': {
    name: 'Singly Linked List',
    category: 'linear',
    desc: 'Linear sequence of discrete nodes connected via next memory pointers.',
    complexity: {
      time: [
        { op: 'Access by Index', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' },
        { op: 'Search by Value', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' },
        { op: 'Insert at Head', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Insert at Tail', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Delete Head', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Delete at Index', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' }
      ],
      space: 'O(n)'
    },
    theory: `
      <h3>Linked List Structure</h3>
      <p>Unlike arrays, linked lists do not require contiguous memory blocks. Each <strong>Node</strong> encapsulates:</p>
      <ul>
        <li><code>data</code>: The actual value stored.</li>
        <li><code>next</code>: A reference / pointer to the memory address of the next node.</li>
      </ul>
      <p>Linked lists excel at dynamic memory allocation and constant-time head insertions, but suffer from lack of direct indexing.</p>
    `
  },
  'stack': {
    name: 'Stack (LIFO)',
    category: 'linear',
    desc: 'Last-In, First-Out collection with top-restricted push and pop access.',
    capacity: 6,
    complexity: {
      time: [
        { op: 'Push (Insert)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Pop (Remove)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Peek (Top)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Search', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' }
      ],
      space: 'O(n)'
    },
    theory: `
      <h3>Stack Behavior (LIFO)</h3>
      <p>A Stack restricts insertions and removals to one end, called the <strong>Top</strong>.</p>
      <ul>
        <li><strong>Push:</strong> Places a new item onto the top of the stack.</li>
        <li><strong>Pop:</strong> Removes the most recently added item.</li>
        <li><strong>Applications:</strong> Function call stack, undo/redo mechanisms, syntax parsing, backtracking algorithms.</li>
      </ul>
    `
  },
  'queue': {
    name: 'Queue (FIFO)',
    category: 'linear',
    desc: 'First-In, First-Out sequence with insertions at rear and removals from front.',
    capacity: 7,
    complexity: {
      time: [
        { op: 'Enqueue (Insert Rear)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Dequeue (Remove Front)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Peek (Front)', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Search', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' }
      ],
      space: 'O(n)'
    },
    theory: `
      <h3>Queue Behavior (FIFO)</h3>
      <p>A Queue maintains strict order: elements are inserted at the <strong>Rear (Tail)</strong> and removed from the <strong>Front (Head)</strong>.</p>
      <ul>
        <li><strong>Enqueue:</strong> Append to end.</li>
        <li><strong>Dequeue:</strong> Pop from beginning.</li>
        <li><strong>Applications:</strong> BFS graph traversal, printer queues, CPU task scheduling, event buffering.</li>
      </ul>
    `
  },
  'tree': {
    name: 'Binary Search Tree (BST)',
    category: 'nonLinear',
    desc: 'Hierarchical tree where left children are smaller and right children are larger.',
    complexity: {
      time: [
        { op: 'Search', avg: 'O(log n)', worst: 'O(n)', cls: 'comp-ologn' },
        { op: 'Insert', avg: 'O(log n)', worst: 'O(n)', cls: 'comp-ologn' },
        { op: 'Delete', avg: 'O(log n)', worst: 'O(n)', cls: 'comp-ologn' },
        { op: 'Traversal (All nodes)', avg: 'O(n)', worst: 'O(n)', cls: 'comp-on' }
      ],
      space: 'O(n)'
    },
    theory: `
      <h3>Binary Search Tree (BST) Properties</h3>
      <p>A rooted binary tree where every node satisfies:</p>
      <ul>
        <li><code>node.left.val < node.val</code></li>
        <li><code>node.right.val > node.val</code></li>
      </ul>
      <p><strong>Traversals:</strong></p>
      <ul>
        <li><strong>In-order:</strong> Left &rarr; Root &rarr; Right (yields sorted sequence).</li>
        <li><strong>Pre-order:</strong> Root &rarr; Left &rarr; Right.</li>
        <li><strong>Post-order:</strong> Left &rarr; Right &rarr; Root.</li>
        <li><strong>Level-order (BFS):</strong> Level by level from top to bottom.</li>
      </ul>
    `
  },
  'graph': {
    name: 'Graph (Adjacency Network)',
    category: 'nonLinear',
    desc: 'Network composed of vertices (nodes) and connecting edges (relationships).',
    complexity: {
      time: [
        { op: 'Add Vertex', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'Add Edge', avg: 'O(1)', worst: 'O(1)', cls: 'comp-o1' },
        { op: 'BFS Traversal', avg: 'O(V + E)', worst: 'O(V + E)', cls: 'comp-on' },
        { op: 'DFS Traversal', avg: 'O(V + E)', worst: 'O(V + E)', cls: 'comp-on' }
      ],
      space: 'O(V + E)'
    },
    theory: `
      <h3>Graph Data Structure</h3>
      <p>A Graph <code>G = (V, E)</code> consists of a set of <strong>Vertices (V)</strong> connected by <strong>Edges (E)</strong>.</p>
      <ul>
        <li><strong>Breadth-First Search (BFS):</strong> Uses a Queue to explore neighbor-by-neighbor in concentric waves. Finds shortest paths in unweighted graphs.</li>
        <li><strong>Depth-First Search (DFS):</strong> Uses recursion / Stack to explore as deep as possible before backtracking.</li>
      </ul>
    `
  }
};

const CODE_TEMPLATES = {
  array: {
    init: `const array = new Array(capacity);\nlet size = array.length;`,
    push: `function push(value) {\n  if (size >= capacity) throw "Overflow";\n  array[size] = value;\n  size++;\n  return size;\n}`,
    insertAt: `function insertAt(index, value) {\n  if (index < 0 || index > size) throw "Out of bounds";\n  for (let i = size; i > index; i--) {\n    array[i] = array[i - 1];\n  }\n  array[index] = value;\n  size++;\n}`,
    pop: `function pop() {\n  if (size === 0) throw "Underflow";\n  const item = array[size - 1];\n  size--;\n  return item;\n}`,
    deleteAt: `function deleteAt(index) {\n  if (index < 0 || index >= size) throw "Out of bounds";\n  const removed = array[index];\n  for (let i = index; i < size - 1; i++) {\n    array[i] = array[i + 1];\n  }\n  size--;\n  return removed;\n}`,
    search: `function linearSearch(target) {\n  for (let i = 0; i < size; i++) {\n    if (array[i] === target) {\n      return i;\n    }\n  }\n  return -1;\n}`
  },
  'linked-list': {
    init: `class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\nlet head = null;`,
    insertHead: `function insertHead(value) {\n  const newNode = new Node(value);\n  newNode.next = head;\n  head = newNode;\n}`,
    insertTail: `function insertTail(value) {\n  const newNode = new Node(value);\n  if (!head) { head = newNode; return; }\n  let curr = head;\n  while (curr.next !== null) {\n    curr = curr.next;\n  }\n  curr.next = newNode;\n}`,
    deleteHead: `function deleteHead() {\n  if (!head) return null;\n  const removed = head.data;\n  head = head.next;\n  return removed;\n}`,
    search: `function search(target) {\n  let curr = head, index = 0;\n  while (curr !== null) {\n    if (curr.data === target) return index;\n    curr = curr.next;\n    index++;\n  }\n  return -1;\n}`
  },
  stack: {
    init: `class Stack {\n  constructor(capacity = 6) {\n    this.items = [];\n    this.capacity = capacity;\n  }\n}`,
    push: `function push(element) {\n  if (items.length >= capacity) {\n    throw new Error("Stack Overflow");\n  }\n  items.push(element);\n}`,
    pop: `function pop() {\n  if (items.length === 0) {\n    throw new Error("Stack Underflow");\n  }\n  return items.pop();\n}`,
    peek: `function peek() {\n  if (items.length === 0) return null;\n  return items[items.length - 1];\n}`
  },
  queue: {
    init: `class Queue {\n  constructor(capacity = 7) {\n    this.items = [];\n    this.capacity = capacity;\n  }\n}`,
    enqueue: `function enqueue(element) {\n  if (items.length >= capacity) {\n    throw new Error("Queue Full");\n  }\n  items.push(element);\n}`,
    dequeue: `function dequeue() {\n  if (items.length === 0) {\n    throw new Error("Queue Empty");\n  }\n  return items.shift();\n}`,
    peek: `function peekFront() {\n  if (items.length === 0) return null;\n  return items[0];\n}`
  },
  tree: {
    init: `class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}`,
    insert: `function insertBST(root, val) {\n  if (!root) return new TreeNode(val);\n  if (val < root.val) root.left = insertBST(root.left, val);\n  else if (val > root.val) root.right = insertBST(root.right, val);\n  return root;\n}`,
    search: `function searchBST(root, target) {\n  if (!root || root.val === target) return root;\n  if (target < root.val) return searchBST(root.left, target);\n  return searchBST(root.right, target);\n}`,
    inorder: `function inOrder(node) {\n  if (!node) return;\n  inOrder(node.left);\n  visit(node.val);\n  inOrder(node.right);\n}`,
    bfs: `function levelOrder(root) {\n  if (!root) return;\n  const queue = [root];\n  while (queue.length > 0) {\n    const node = queue.shift();\n    visit(node.val);\n    if (node.left) queue.push(node.left);\n    if (node.right) queue.push(node.right);\n  }\n}`
  },
  graph: {
    init: `class Graph {\n  constructor() {\n    this.adjList = new Map();\n  }\n  addVertex(v) { this.adjList.set(v, []); }\n  addEdge(u, v) { this.adjList.get(u).push(v); }\n}`,
    bfs: `function bfs(startNode) {\n  const visited = new Set([startNode]);\n  const queue = [startNode];\n  while (queue.length > 0) {\n    const u = queue.shift();\n    process(u);\n    for (const v of adjList.get(u)) {\n      if (!visited.has(v)) {\n        visited.add(v);\n        queue.push(v);\n      }\n    }\n  }\n}`,
    dfs: `function dfs(node, visited = new Set()) {\n  visited.add(node);\n  process(node);\n  for (const neighbor of adjList.get(node)) {\n    if (!visited.has(neighbor)) {\n      dfs(neighbor, visited);\n    }\n  }\n}`
  }
};

class PlaygroundEngine {
  constructor() {
    this.currentDS = 'array';
    this.speed = 1.0;
    this.isBusy = false;
    this.state = {};
    
    this.initDOM();
    this.initEventListeners();
    this.switchDataStructure('array');
  }

  initDOM() {
    this.dom = {
      typeSelect: document.getElementById('typeof_data_structure'),
      dsList: document.getElementById('data_structure'),
      speedSlider: document.getElementById('anim_speed'),
      speedValue: document.getElementById('speed_value'),
      btnReset: document.getElementById('btn_reset_all'),
      stage: document.getElementById('visualizer_stage'),
      deckForms: document.getElementById('operations_container'),
      deckHint: document.getElementById('deck_hint'),
      title: document.getElementById('current_ds_title'),
      desc: document.getElementById('current_ds_desc'),
      badgeSize: document.getElementById('badge_size'),
      badgeCapacity: document.getElementById('badge_capacity'),
      codeOperation: document.getElementById('code_operation_name'),
      codeContent: document.getElementById('code_content'),
      compTableBody: document.getElementById('time_complexity_tbody'),
      spaceCompVal: document.getElementById('space_complexity_val'),
      theoryContent: document.getElementById('theory_content'),
      logsBody: document.getElementById('logs_body'),
      btnClearLogs: document.getElementById('btn_clear_logs'),
      tabBtns: document.querySelectorAll('.tab-btn'),
      tabPanes: document.querySelectorAll('.tab-pane')
    };
  }

  initEventListeners() {
    this.dom.typeSelect.addEventListener('change', (e) => {
      this.populateDSPills(e.target.value);
    });

    this.dom.speedSlider.addEventListener('input', (e) => {
      this.speed = parseFloat(e.target.value);
      this.dom.speedValue.textContent = `${this.speed}x`;
    });

    this.dom.btnReset.addEventListener('click', () => {
      if (this.isBusy) return;
      this.resetCurrentDS();
    });

    this.dom.btnClearLogs.addEventListener('click', () => {
      this.dom.logsBody.replaceChildren();
      this.log('Logs cleared.', 'info');
    });

    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.tabBtns.forEach(b => b.classList.remove('active'));
        this.dom.tabPanes.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = document.getElementById(btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  async sleep(ms = 400) {
    const adjustedMs = ms / this.speed;
    return new Promise(resolve => setTimeout(resolve, adjustedMs));
  }

  log(msg, type = 'info') {
    const entry = document.createElement('div');
    entry.className = `log-entry log-${type}`;
    
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    entry.innerHTML = `<span class="log-time">[${timeStr}]</span><span class="log-msg">${msg}</span>`;
    this.dom.logsBody.appendChild(entry);
    this.dom.logsBody.scrollTop = this.dom.logsBody.scrollHeight;
  }

  updateCode(operationName, codeString, activeLine = -1) {
    this.dom.codeOperation.textContent = `Operation: ${operationName}`;
    const lines = codeString.split('\n');
    
    const html = lines.map((line, idx) => {
      const isHighlighted = idx === activeLine;
      const escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<span class="code-line ${isHighlighted ? 'highlight' : ''}">${escaped || '&nbsp;'}</span>`;
    }).join('');
    
    this.dom.codeContent.innerHTML = html;
  }

  populateDSPills(category) {
    this.dom.dsList.replaceChildren();
    const keys = Object.keys(DATA_STRUCTURES).filter(k => DATA_STRUCTURES[k].category === category);
    
    keys.forEach((key) => {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.dataset.value = key;
      li.textContent = DATA_STRUCTURES[key].name;
      
      li.addEventListener('click', () => {
        if (this.isBusy) return;
        this.switchDataStructure(key);
      });

      this.dom.dsList.appendChild(li);
    });

    if (keys.length > 0) {
      this.switchDataStructure(keys[0]);
    }
  }

  switchDataStructure(dsKey) {
    this.currentDS = dsKey;
    const meta = DATA_STRUCTURES[dsKey];

    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.value === dsKey);
    });

    this.dom.title.textContent = meta.name;
    this.dom.desc.textContent = meta.desc;

    this.dom.badgeCapacity.style.display = meta.capacity ? 'inline-block' : 'none';
    if (meta.capacity) {
      this.dom.badgeCapacity.textContent = `Capacity: ${meta.capacity}`;
    }

    this.dom.compTableBody.replaceChildren();
    meta.complexity.time.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.op}</td>
        <td><span class="comp-badge ${item.cls}">${item.avg}</span></td>
        <td><span class="comp-badge ${item.cls}">${item.worst}</span></td>
      `;
      this.dom.compTableBody.appendChild(tr);
    });
    this.dom.spaceCompVal.textContent = meta.complexity.space;

    this.dom.theoryContent.innerHTML = meta.theory;

    this.resetCurrentDS();
  }

  resetCurrentDS() {
    this.log(`Switched to ${DATA_STRUCTURES[this.currentDS].name}. Resetting state.`, 'info');
    
    switch (this.currentDS) {
      case 'array':
        this.initArray();
        break;
      case 'linked-list':
        this.initLinkedList();
        break;
      case 'stack':
        this.initStack();
        break;
      case 'queue':
        this.initQueue();
        break;
      case 'tree':
        this.initBST();
        break;
      case 'graph':
        this.initGraph();
        break;
    }
  }

  setBusy(busy, hint = '') {
    this.isBusy = busy;
    this.dom.deckHint.textContent = hint;
    document.querySelectorAll('.deck-forms button, .deck-forms input, #btn_reset_all').forEach(el => {
      el.disabled = busy;
    });
  }

  initArray() {
    this.state.array = [18, 42, 7, 95, 33];
    this.state.capacity = DATA_STRUCTURES.array.capacity;
    this.state.baseAddress = 0x1000;

    this.renderArrayDeck();
    this.renderArrayStage();
    this.updateCode('Initialize Array', CODE_TEMPLATES.array.init, 0);
  }

  renderArrayDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="arr_val_push" class="input-field" value="50" min="1" max="999">
        <button class="btn-primary" id="btn_arr_push">Push (Append)</button>
      </div>

      <div class="op-group">
        <label>Idx:</label>
        <input type="number" id="arr_idx_insert" class="input-field" value="2" min="0" max="7">
        <label>Val:</label>
        <input type="number" id="arr_val_insert" class="input-field" value="88" min="1" max="999">
        <button class="btn-secondary" id="btn_arr_insert">Insert at Index</button>
      </div>

      <div class="op-group">
        <label>Search Val:</label>
        <input type="number" id="arr_val_search" class="input-field" value="95" min="1" max="999">
        <button class="btn-secondary" id="btn_arr_search">Linear Search</button>
      </div>

      <div class="op-group">
        <label>Delete Idx:</label>
        <input type="number" id="arr_idx_del" class="input-field" value="0" min="0" max="7">
        <button class="btn-danger" id="btn_arr_del_idx">Delete at Index</button>
      </div>

      <div class="op-group">
        <button class="btn-danger" id="btn_arr_pop">Pop (Remove End)</button>
        <button class="btn-secondary" id="btn_arr_rand">Randomize</button>
      </div>
    `;

    document.getElementById('btn_arr_push').addEventListener('click', () => this.handleArrayPush());
    document.getElementById('btn_arr_insert').addEventListener('click', () => this.handleArrayInsert());
    document.getElementById('btn_arr_search').addEventListener('click', () => this.handleArraySearch());
    document.getElementById('btn_arr_del_idx').addEventListener('click', () => this.handleArrayDeleteIndex());
    document.getElementById('btn_arr_pop').addEventListener('click', () => this.handleArrayPop());
    document.getElementById('btn_arr_rand').addEventListener('click', () => this.handleArrayRandomize());
  }

  renderArrayStage(highlightIdx = -1, highlightCls = 'active-inspect') {
    this.dom.badgeSize.textContent = `Size: ${this.state.array.length}`;
    
    let cellsHtml = '';
    for (let i = 0; i < this.state.capacity; i++) {
      const isFilled = i < this.state.array.length;
      const val = isFilled ? this.state.array[i] : 'Ø';
      const cellCls = isFilled ? (i === highlightIdx ? highlightCls : '') : 'empty';
      const addrHex = `0x${(this.state.baseAddress + i * 4).toString(16).toUpperCase()}`;

      cellsHtml += `
        <div class="array-cell-card">
          <div class="array-cell ${cellCls}" id="arr_cell_${i}">${val}</div>
          <span class="array-index">[ ${i} ]</span>
          <span class="array-address">${addrHex}</span>
        </div>
      `;
    }

    this.dom.stage.innerHTML = `
      <div class="array-wrapper">
        <div class="array-container">${cellsHtml}</div>
      </div>
    `;
  }

  async handleArrayPush() {
    const valInput = document.getElementById('arr_val_push');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    if (this.state.array.length >= this.state.capacity) {
      this.log(`Cannot push: Array capacity (${this.state.capacity}) reached!`, 'error');
      return;
    }

    this.setBusy(true, `Pushing ${val} to index ${this.state.array.length}...`);
    this.updateCode('Array.push(value)', CODE_TEMPLATES.array.push, 2);
    
    const targetIdx = this.state.array.length;
    this.state.array.push(val);
    this.renderArrayStage(targetIdx, 'modify');
    this.log(`Pushed value ${val} at index ${targetIdx} (Memory: 0x${(this.state.baseAddress + targetIdx * 4).toString(16).toUpperCase()}).`, 'success');
    
    await this.sleep(600);
    this.renderArrayStage();
    this.setBusy(false);
  }

  async handleArrayInsert() {
    const idxInput = document.getElementById('arr_idx_insert');
    const valInput = document.getElementById('arr_val_insert');
    const idx = parseInt(idxInput.value, 10);
    const val = parseInt(valInput.value, 10);

    if (isNaN(idx) || isNaN(val)) return;
    if (idx < 0 || idx > this.state.array.length || this.state.array.length >= this.state.capacity) {
      this.log(`Invalid insert index ${idx} or array is full!`, 'error');
      return;
    }

    this.setBusy(true, `Inserting ${val} at index ${idx}...`);
    this.updateCode('Array.insertAt(index, value)', CODE_TEMPLATES.array.insertAt, 3);
    
    this.log(`Shifting elements from index ${this.state.array.length - 1} down to ${idx} one position right...`, 'highlight');
    this.state.array.splice(idx, 0, val);
    
    for (let i = this.state.array.length - 1; i >= idx; i--) {
      this.renderArrayStage(i, 'modify');
      await this.sleep(300);
    }

    this.renderArrayStage(idx, 'match');
    this.log(`Inserted ${val} at index ${idx}. Array size is now ${this.state.array.length}.`, 'success');
    await this.sleep(600);
    this.renderArrayStage();
    this.setBusy(false);
  }

  async handleArraySearch() {
    const valInput = document.getElementById('arr_val_search');
    const target = parseInt(valInput.value, 10);
    if (isNaN(target)) return;

    this.setBusy(true, `Searching for ${target}...`);
    this.updateCode('Linear Search', CODE_TEMPLATES.array.search, 1);

    let found = false;
    for (let i = 0; i < this.state.array.length; i++) {
      this.updateCode('Linear Search', CODE_TEMPLATES.array.search, 2);
      this.renderArrayStage(i, 'active-inspect');
      this.log(`Checking index ${i}: value is ${this.state.array[i]} (Target: ${target})`, 'info');
      await this.sleep(500);

      if (this.state.array[i] === target) {
        this.updateCode('Linear Search', CODE_TEMPLATES.array.search, 3);
        this.renderArrayStage(i, 'match');
        this.log(`Target ${target} found at index ${i}! Constant address access O(1).`, 'success');
        found = true;
        await this.sleep(1200);
        break;
      }
    }

    if (!found) {
      this.updateCode('Linear Search', CODE_TEMPLATES.array.search, 5);
      this.log(`Target ${target} not found in array (Searched ${this.state.array.length} elements).`, 'warn');
      await this.sleep(600);
    }

    this.renderArrayStage();
    this.setBusy(false);
  }

  async handleArrayDeleteIndex() {
    const idxInput = document.getElementById('arr_idx_del');
    const idx = parseInt(idxInput.value, 10);
    if (isNaN(idx) || idx < 0 || idx >= this.state.array.length) {
      this.log(`Invalid deletion index ${idx}!`, 'error');
      return;
    }

    this.setBusy(true, `Deleting item at index ${idx}...`);
    this.updateCode('Array.deleteAt(index)', CODE_TEMPLATES.array.deleteAt, 2);
    
    this.renderArrayStage(idx, 'removed');
    const removedVal = this.state.array[idx];
    this.log(`Removing value ${removedVal} from index ${idx}...`, 'warn');
    await this.sleep(400);

    this.state.array.splice(idx, 1);
    this.renderArrayStage();
    this.log(`Deleted ${removedVal}. Shifted remaining elements left to maintain contiguity.`, 'success');
    this.setBusy(false);
  }

  async handleArrayPop() {
    if (this.state.array.length === 0) {
      this.log(`Cannot pop: Array is empty (Underflow)!`, 'error');
      return;
    }

    this.setBusy(true, `Popping element from array end...`);
    this.updateCode('Array.pop()', CODE_TEMPLATES.array.pop, 2);
    
    const lastIdx = this.state.array.length - 1;
    this.renderArrayStage(lastIdx, 'removed');
    const removed = this.state.array.pop();
    
    this.log(`Popped ${removed} from index ${lastIdx}. O(1) time complexity.`, 'success');
    await this.sleep(400);
    this.renderArrayStage();
    this.setBusy(false);
  }

  handleArrayRandomize() {
    const count = 3 + Math.floor(Math.random() * 4);
    this.state.array = Array.from({ length: count }, () => Math.floor(Math.random() * 90) + 10);
    this.renderArrayStage();
    this.log(`Generated new randomized array of size ${count}.`, 'info');
  }

  initLinkedList() {
    this.state.linkedList = [14, 29, 63, 81];
    this.renderLinkedListDeck();
    this.renderLinkedListStage();
    this.updateCode('Linked List Init', CODE_TEMPLATES['linked-list'].init, 0);
  }

  renderLinkedListDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="ll_val_head" class="input-field" value="7" min="1" max="999">
        <button class="btn-primary" id="btn_ll_ins_head">Insert Head</button>
      </div>

      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="ll_val_tail" class="input-field" value="99" min="1" max="999">
        <button class="btn-secondary" id="btn_ll_ins_tail">Insert Tail</button>
      </div>

      <div class="op-group">
        <label>Search:</label>
        <input type="number" id="ll_val_search" class="input-field" value="63" min="1" max="999">
        <button class="btn-secondary" id="btn_ll_search">Search Node</button>
      </div>

      <div class="op-group">
        <button class="btn-danger" id="btn_ll_del_head">Delete Head</button>
        <button class="btn-danger" id="btn_ll_del_tail">Delete Tail</button>
      </div>
    `;

    document.getElementById('btn_ll_ins_head').addEventListener('click', () => this.handleLLInsertHead());
    document.getElementById('btn_ll_ins_tail').addEventListener('click', () => this.handleLLInsertTail());
    document.getElementById('btn_ll_search').addEventListener('click', () => this.handleLLSearch());
    document.getElementById('btn_ll_del_head').addEventListener('click', () => this.handleLLDeleteHead());
    document.getElementById('btn_ll_del_tail').addEventListener('click', () => this.handleLLDeleteTail());
  }

  renderLinkedListStage(highlightIdx = -1, highlightCls = 'active-inspect') {
    this.dom.badgeSize.textContent = `Size: ${this.state.linkedList.length}`;
    
    if (this.state.linkedList.length === 0) {
      this.dom.stage.innerHTML = `
        <div class="ll-container">
          <div class="ll-null">HEAD &rarr; NULL (Empty List)</div>
        </div>
      `;
      return;
    }

    let nodesHtml = '';
    this.state.linkedList.forEach((val, idx) => {
      const isHighlighted = idx === highlightIdx;
      const nodeCls = isHighlighted ? highlightCls : '';
      const isHead = idx === 0;
      const isTail = idx === this.state.linkedList.length - 1;

      nodesHtml += `
        <div class="ll-node-group">
          <div class="ll-node-wrapper">
            <div class="ll-node ${nodeCls}" id="ll_node_${idx}">
              <div class="ll-data">${val}</div>
              <div class="ll-ptr">&bull;&rarr;</div>
            </div>
            <div class="ll-pointer-label">
              ${isHead ? 'HEAD ' : ''}${isTail ? 'TAIL' : ''}
            </div>
          </div>
          <div class="ll-arrow">&rarr;</div>
        </div>
      `;
    });

    nodesHtml += `<div class="ll-null">NULL</div>`;

    this.dom.stage.innerHTML = `<div class="ll-container">${nodesHtml}</div>`;
  }

  async handleLLInsertHead() {
    const valInput = document.getElementById('ll_val_head');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    this.setBusy(true, `Inserting ${val} at HEAD...`);
    this.updateCode('Insert at Head', CODE_TEMPLATES['linked-list'].insertHead, 2);

    this.state.linkedList.unshift(val);
    this.renderLinkedListStage(0, 'match');
    this.log(`Created new Node(${val}). Linked newNode.next = HEAD; HEAD = newNode. O(1) time complexity!`, 'success');
    
    await this.sleep(600);
    this.renderLinkedListStage();
    this.setBusy(false);
  }

  async handleLLInsertTail() {
    const valInput = document.getElementById('ll_val_tail');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    this.setBusy(true, `Inserting ${val} at TAIL...`);
    this.updateCode('Insert at Tail', CODE_TEMPLATES['linked-list'].insertTail, 6);

    this.state.linkedList.push(val);
    this.renderLinkedListStage(this.state.linkedList.length - 1, 'match');
    this.log(`Created new Node(${val}). Traversed to tail and updated lastNode.next = newNode.`, 'success');
    
    await this.sleep(600);
    this.renderLinkedListStage();
    this.setBusy(false);
  }

  async handleLLSearch() {
    const valInput = document.getElementById('ll_val_search');
    const target = parseInt(valInput.value, 10);
    if (isNaN(target)) return;

    this.setBusy(true, `Traversing list to search for ${target}...`);
    this.updateCode('Search Node', CODE_TEMPLATES['linked-list'].search, 2);

    let foundIdx = -1;
    for (let i = 0; i < this.state.linkedList.length; i++) {
      this.updateCode('Search Node', CODE_TEMPLATES['linked-list'].search, 3);
      this.renderLinkedListStage(i, 'active-inspect');
      this.log(`Inspecting Node ${i}: val = ${this.state.linkedList[i]}`, 'info');
      await this.sleep(500);

      if (this.state.linkedList[i] === target) {
        this.renderLinkedListStage(i, 'match');
        this.log(`Target ${target} found at Node index ${i}!`, 'success');
        foundIdx = i;
        await this.sleep(1000);
        break;
      }
    }

    if (foundIdx === -1) {
      this.log(`Node with value ${target} not found in the list.`, 'warn');
      await this.sleep(500);
    }

    this.renderLinkedListStage();
    this.setBusy(false);
  }

  async handleLLDeleteHead() {
    if (this.state.linkedList.length === 0) {
      this.log(`Cannot delete head: List is already empty!`, 'error');
      return;
    }

    this.setBusy(true, `Deleting HEAD node...`);
    this.updateCode('Delete Head', CODE_TEMPLATES['linked-list'].deleteHead, 3);

    this.renderLinkedListStage(0, 'active-inspect');
    await this.sleep(400);

    const removed = this.state.linkedList.shift();
    this.renderLinkedListStage();
    this.log(`Removed HEAD node (${removed}). HEAD updated to next node in O(1) time.`, 'success');
    this.setBusy(false);
  }

  async handleLLDeleteTail() {
    if (this.state.linkedList.length === 0) {
      this.log(`Cannot delete tail: List is already empty!`, 'error');
      return;
    }

    this.setBusy(true, `Deleting TAIL node...`);
    const tailIdx = this.state.linkedList.length - 1;
    this.renderLinkedListStage(tailIdx, 'active-inspect');
    await this.sleep(400);

    const removed = this.state.linkedList.pop();
    this.renderLinkedListStage();
    this.log(`Removed TAIL node (${removed}).`, 'success');
    this.setBusy(false);
  }

  initStack() {
    this.state.stack = [10, 25, 40];
    this.state.stackCapacity = DATA_STRUCTURES.stack.capacity;
    this.renderStackDeck();
    this.renderStackStage();
    this.updateCode('Stack Init', CODE_TEMPLATES.stack.init, 0);
  }

  renderStackDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="stack_val" class="input-field" value="65" min="1" max="999">
        <button class="btn-primary" id="btn_stack_push">Push (Top)</button>
      </div>

      <div class="op-group">
        <button class="btn-danger" id="btn_stack_pop">Pop (Top)</button>
        <button class="btn-secondary" id="btn_stack_peek">Peek (Top)</button>
        <button class="btn-secondary" id="btn_stack_clear">Clear Stack</button>
      </div>
    `;

    document.getElementById('btn_stack_push').addEventListener('click', () => this.handleStackPush());
    document.getElementById('btn_stack_pop').addEventListener('click', () => this.handleStackPop());
    document.getElementById('btn_stack_peek').addEventListener('click', () => this.handleStackPeek());
    document.getElementById('btn_stack_clear').addEventListener('click', () => {
      this.state.stack = [];
      this.renderStackStage();
      this.log('Stack cleared.', 'info');
    });
  }

  renderStackStage(highlightTop = false) {
    this.dom.badgeSize.textContent = `Size: ${this.state.stack.length}`;
    
    let itemsHtml = '';
    this.state.stack.forEach((val, idx) => {
      const isTop = idx === this.state.stack.length - 1;
      const cls = isTop ? 'top-item' : '';
      itemsHtml += `<div class="stack-item ${cls}">${val} ${isTop ? '<span style="font-size:10px;margin-left:6px;opacity:0.8;">(TOP)</span>' : ''}</div>`;
    });

    const isFull = this.state.stack.length >= this.state.stackCapacity;
    const isEmpty = this.state.stack.length === 0;

    this.dom.stage.innerHTML = `
      <div class="stack-wrapper">
        <div class="stack-container">${itemsHtml}</div>
        <div class="stack-meta-info">
          <div class="stack-indicator">
            <span class="badge ${isFull ? 'badge-danger' : 'badge-info'}">${isFull ? 'STACK FULL' : (isEmpty ? 'STACK EMPTY' : 'LIFO ACTIVE')}</span>
          </div>
          <div class="stack-indicator">
            <span>Capacity: <strong>${this.state.stack.length} / ${this.state.stackCapacity}</strong></span>
          </div>
          <div class="stack-indicator">
            <span>Top Value: <strong>${!isEmpty ? this.state.stack[this.state.stack.length - 1] : 'None'}</strong></span>
          </div>
        </div>
      </div>
    `;
  }

  async handleStackPush() {
    const valInput = document.getElementById('stack_val');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    if (this.state.stack.length >= this.state.stackCapacity) {
      this.log(`Stack Overflow: Capacity limit (${this.state.stackCapacity}) reached!`, 'error');
      return;
    }

    this.setBusy(true, `Pushing ${val} to Top...`);
    this.updateCode('Stack.push(element)', CODE_TEMPLATES.stack.push, 4);

    this.state.stack.push(val);
    this.renderStackStage();
    this.log(`Pushed ${val} onto the stack. New TOP is ${val}. O(1) time.`, 'success');
    
    await this.sleep(500);
    this.setBusy(false);
  }

  async handleStackPop() {
    if (this.state.stack.length === 0) {
      this.log(`Stack Underflow: Stack is empty!`, 'error');
      return;
    }

    this.setBusy(true, `Popping element from Top...`);
    this.updateCode('Stack.pop()', CODE_TEMPLATES.stack.pop, 4);

    const removed = this.state.stack.pop();
    this.renderStackStage();
    this.log(`Popped ${removed} from Top of Stack. O(1) time.`, 'success');
    
    await this.sleep(400);
    this.setBusy(false);
  }

  async handleStackPeek() {
    if (this.state.stack.length === 0) {
      this.log(`Stack is empty. Peek returns null.`, 'warn');
      return;
    }

    this.setBusy(true, `Peeking at Top element...`);
    this.updateCode('Stack.peek()', CODE_TEMPLATES.stack.peek, 2);

    const topVal = this.state.stack[this.state.stack.length - 1];
    this.renderStackStage(true);
    this.log(`Peek: TOP item is ${topVal}. (Stack remains unmodified).`, 'highlight');
    
    await this.sleep(800);
    this.renderStackStage();
    this.setBusy(false);
  }

  initQueue() {
    this.state.queue = [10, 20, 30, 40];
    this.state.queueCapacity = DATA_STRUCTURES.queue.capacity;
    this.renderQueueDeck();
    this.renderQueueStage();
    this.updateCode('Queue Init', CODE_TEMPLATES.queue.init, 0);
  }

  renderQueueDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="queue_val" class="input-field" value="50" min="1" max="999">
        <button class="btn-primary" id="btn_queue_enq">Enqueue (Rear)</button>
      </div>

      <div class="op-group">
        <button class="btn-danger" id="btn_queue_deq">Dequeue (Front)</button>
        <button class="btn-secondary" id="btn_queue_peek">Peek Front</button>
        <button class="btn-secondary" id="btn_queue_clear">Clear</button>
      </div>
    `;

    document.getElementById('btn_queue_enq').addEventListener('click', () => this.handleQueueEnqueue());
    document.getElementById('btn_queue_deq').addEventListener('click', () => this.handleQueueDequeue());
    document.getElementById('btn_queue_peek').addEventListener('click', () => this.handleQueuePeek());
    document.getElementById('btn_queue_clear').addEventListener('click', () => {
      this.state.queue = [];
      this.renderQueueStage();
      this.log('Queue cleared.', 'info');
    });
  }

  renderQueueStage() {
    this.dom.badgeSize.textContent = `Size: ${this.state.queue.length}`;
    
    let itemsHtml = '';
    this.state.queue.forEach((val, idx) => {
      const isFront = idx === 0;
      const isRear = idx === this.state.queue.length - 1;
      let cls = '';
      if (isFront) cls = 'front-item';
      else if (isRear) cls = 'rear-item';

      itemsHtml += `<div class="queue-item ${cls}">${val}</div>`;
    });

    if (this.state.queue.length === 0) {
      itemsHtml = `<span style="color:var(--text-3);font-family:var(--font-mono);font-size:12px;">[ Empty Queue ]</span>`;
    }

    this.dom.stage.innerHTML = `
      <div class="queue-wrapper">
        <div class="queue-labels">
          <span>&larr; FRONT (Dequeue / Exit)</span>
          <span>REAR (Enqueue / Entry) &larr;</span>
        </div>
        <div class="queue-container">${itemsHtml}</div>
      </div>
    `;
  }

  async handleQueueEnqueue() {
    const valInput = document.getElementById('queue_val');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    if (this.state.queue.length >= this.state.queueCapacity) {
      this.log(`Queue is Full: Max capacity (${this.state.queueCapacity}) reached!`, 'error');
      return;
    }

    this.setBusy(true, `Enqueuing ${val} at REAR...`);
    this.updateCode('Queue.enqueue(element)', CODE_TEMPLATES.queue.enqueue, 4);

    this.state.queue.push(val);
    this.renderQueueStage();
    this.log(`Enqueued ${val} at REAR of queue. O(1) time complexity.`, 'success');
    
    await this.sleep(500);
    this.setBusy(false);
  }

  async handleQueueDequeue() {
    if (this.state.queue.length === 0) {
      this.log(`Queue Underflow: Queue is empty!`, 'error');
      return;
    }

    this.setBusy(true, `Dequeuing element from FRONT...`);
    this.updateCode('Queue.dequeue()', CODE_TEMPLATES.queue.dequeue, 4);

    const removed = this.state.queue.shift();
    this.renderQueueStage();
    this.log(`Dequeued ${removed} from FRONT of queue. O(1) FIFO operation.`, 'success');
    
    await this.sleep(400);
    this.setBusy(false);
  }

  async handleQueuePeek() {
    if (this.state.queue.length === 0) {
      this.log(`Queue is empty.`, 'warn');
      return;
    }

    this.setBusy(true, `Peeking FRONT element...`);
    this.updateCode('Queue.peekFront()', CODE_TEMPLATES.queue.peek, 2);

    this.log(`Peek: Front element is ${this.state.queue[0]}.`, 'highlight');
    await this.sleep(600);
    this.setBusy(false);
  }

  initBST() {
    this.state.bstRoot = null;
    [50, 30, 70, 20, 40, 60, 80].forEach(v => {
      this.state.bstRoot = this.insertBSTNode(this.state.bstRoot, v);
    });

    this.renderBSTDeck();
    this.renderBSTStage();
    this.updateCode('BST Structure', CODE_TEMPLATES.tree.init, 0);
  }

  insertBSTNode(root, val) {
    if (!root) return { val, left: null, right: null, id: Math.random().toString(36).substr(2, 9) };
    if (val < root.val) root.left = this.insertBSTNode(root.left, val);
    else if (val > root.val) root.right = this.insertBSTNode(root.right, val);
    return root;
  }

  renderBSTDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Val:</label>
        <input type="number" id="bst_val_ins" class="input-field" value="25" min="1" max="999">
        <button class="btn-primary" id="btn_bst_insert">Insert Node</button>
      </div>

      <div class="op-group">
        <label>Search:</label>
        <input type="number" id="bst_val_search" class="input-field" value="60" min="1" max="999">
        <button class="btn-secondary" id="btn_bst_search">Search Key</button>
      </div>

      <div class="op-group">
        <label>Traverse:</label>
        <select id="bst_traversal_type">
          <option value="inorder">In-Order (Sorted)</option>
          <option value="preorder">Pre-Order</option>
          <option value="postorder">Post-Order</option>
          <option value="bfs">Level-Order (BFS)</option>
        </select>
        <button class="btn-secondary" id="btn_bst_traverse">Run Traversal</button>
      </div>

      <div class="op-group">
        <button class="btn-secondary" id="btn_bst_preset">Preset Tree</button>
        <button class="btn-danger" id="btn_bst_clear">Clear</button>
      </div>
    `;

    document.getElementById('btn_bst_insert').addEventListener('click', () => this.handleBSTInsert());
    document.getElementById('btn_bst_search').addEventListener('click', () => this.handleBSTSearch());
    document.getElementById('btn_bst_traverse').addEventListener('click', () => this.handleBSTTraversal());
    document.getElementById('btn_bst_preset').addEventListener('click', () => {
      this.initBST();
      this.log('Loaded standard BST preset tree.', 'info');
    });
    document.getElementById('btn_bst_clear').addEventListener('click', () => {
      this.state.bstRoot = null;
      this.renderBSTStage();
      this.log('Tree cleared.', 'info');
    });
  }

  renderBSTStage(activeNodeId = null, highlightCls = 'inspect') {
    let nodeCount = 0;
    const countNodes = (n) => { if (!n) return; nodeCount++; countNodes(n.left); countNodes(n.right); };
    countNodes(this.state.bstRoot);
    this.dom.badgeSize.textContent = `Nodes: ${nodeCount}`;

    if (!this.state.bstRoot) {
      this.dom.stage.innerHTML = `
        <div class="canvas-container">
          <span style="color:var(--text-3);font-family:var(--font-mono);">[ Empty Binary Tree ]</span>
        </div>
      `;
      return;
    }

    const svgWidth = 650;
    const svgHeight = 360;
    const nodes = [];
    const edges = [];

    const layout = (node, x, y, dx) => {
      if (!node) return;
      nodes.push({ id: node.id, val: node.val, x, y });

      if (node.left) {
        const childX = x - dx;
        const childY = y + 70;
        edges.push({ x1: x, y1: y, x2: childX, y2: childY });
        layout(node.left, childX, childY, dx * 0.52);
      }
      if (node.right) {
        const childX = x + dx;
        const childY = y + 70;
        edges.push({ x1: x, y1: y, x2: childX, y2: childY });
        layout(node.right, childX, childY, dx * 0.52);
      }
    };

    layout(this.state.bstRoot, svgWidth / 2, 45, 140);

    let edgesSvg = edges.map(e => `
      <line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" class="tree-edge" />
    `).join('');

    let nodesSvg = nodes.map(n => {
      const isHighlighted = n.id === activeNodeId;
      const cls = isHighlighted ? highlightCls : '';
      return `
        <g class="tree-node-group" transform="translate(${n.x}, ${n.y})">
          <circle r="22" class="tree-node-circle ${cls}" />
          <text class="tree-node-text">${n.val}</text>
        </g>
      `;
    }).join('');

    this.dom.stage.innerHTML = `
      <div class="canvas-container">
        <svg class="dsa-svg-stage" viewBox="0 0 ${svgWidth} ${svgHeight}">
          ${edgesSvg}
          ${nodesSvg}
        </svg>
      </div>
    `;
  }

  async handleBSTInsert() {
    const valInput = document.getElementById('bst_val_ins');
    const val = parseInt(valInput.value, 10);
    if (isNaN(val)) return;

    this.setBusy(true, `Inserting ${val} into BST...`);
    this.updateCode('BST Insert', CODE_TEMPLATES.tree.insert, 2);

    let curr = this.state.bstRoot;
    this.log(`Starting BST insert from ROOT...`, 'info');

    while (curr) {
      this.renderBSTStage(curr.id, 'inspect');
      this.log(`Comparing ${val} with node (${curr.val})...`, 'info');
      await this.sleep(500);

      if (val === curr.val) {
        this.log(`Value ${val} already exists in BST (no duplicate keys allowed).`, 'warn');
        this.renderBSTStage();
        this.setBusy(false);
        return;
      } else if (val < curr.val) {
        this.log(`${val} < ${curr.val}: Going LEFT child.`, 'highlight');
        if (!curr.left) break;
        curr = curr.left;
      } else {
        this.log(`${val} > ${curr.val}: Going RIGHT child.`, 'highlight');
        if (!curr.right) break;
        curr = curr.right;
      }
    }

    this.state.bstRoot = this.insertBSTNode(this.state.bstRoot, val);
    this.renderBSTStage();
    this.log(`Inserted ${val} into BST in O(log n) average time!`, 'success');
    await this.sleep(400);
    this.setBusy(false);
  }

  async handleBSTSearch() {
    const valInput = document.getElementById('bst_val_search');
    const target = parseInt(valInput.value, 10);
    if (isNaN(target) || !this.state.bstRoot) return;

    this.setBusy(true, `Searching for key ${target} in BST...`);
    this.updateCode('BST Search', CODE_TEMPLATES.tree.search, 2);

    let curr = this.state.bstRoot;
    let found = false;

    while (curr) {
      this.renderBSTStage(curr.id, 'inspect');
      this.log(`Visiting node ${curr.val}...`, 'info');
      await this.sleep(600);

      if (curr.val === target) {
        this.updateCode('BST Search', CODE_TEMPLATES.tree.search, 1);
        this.renderBSTStage(curr.id, 'match');
        this.log(`Key ${target} found in BST! Fast logarithmic search path.`, 'success');
        found = true;
        await this.sleep(1200);
        break;
      } else if (target < curr.val) {
        this.log(`${target} < ${curr.val}: Navigating LEFT branch.`, 'highlight');
        curr = curr.left;
      } else {
        this.log(`${target} > ${curr.val}: Navigating RIGHT branch.`, 'highlight');
        curr = curr.right;
      }
    }

    if (!found) {
      this.log(`Key ${target} not found in this tree.`, 'warn');
      await this.sleep(600);
    }

    this.renderBSTStage();
    this.setBusy(false);
  }

  async handleBSTTraversal() {
    const type = document.getElementById('bst_traversal_type').value;
    if (!this.state.bstRoot) return;

    this.setBusy(true, `Running ${type.toUpperCase()} traversal...`);
    const visitSeq = [];

    if (type === 'inorder') {
      this.updateCode('In-Order Traversal', CODE_TEMPLATES.tree.inorder, 2);
      const inOrder = (n) => { if (!n) return; inOrder(n.left); visitSeq.push(n); inOrder(n.right); };
      inOrder(this.state.bstRoot);
    } else if (type === 'preorder') {
      const preOrder = (n) => { if (!n) return; visitSeq.push(n); preOrder(n.left); preOrder(n.right); };
      preOrder(this.state.bstRoot);
    } else if (type === 'postorder') {
      const postOrder = (n) => { if (!n) return; postOrder(n.left); postOrder(n.right); visitSeq.push(n); };
      postOrder(this.state.bstRoot);
    } else if (type === 'bfs') {
      this.updateCode('Level-Order (BFS)', CODE_TEMPLATES.tree.bfs, 4);
      const q = [this.state.bstRoot];
      while (q.length > 0) {
        const n = q.shift();
        visitSeq.push(n);
        if (n.left) q.push(n.left);
        if (n.right) q.push(n.right);
      }
    }

    this.log(`Traversal sequence: [ ${visitSeq.map(n => n.val).join(' &rarr; ')} ]`, 'highlight');

    for (let i = 0; i < visitSeq.length; i++) {
      const n = visitSeq[i];
      this.renderBSTStage(n.id, 'match');
      this.log(`Visited Step ${i + 1}/${visitSeq.length}: Node(${n.val})`, 'success');
      await this.sleep(600);
    }

    this.renderBSTStage();
    this.setBusy(false);
  }

  initGraph() {
    this.state.graphNodes = [
      { id: 'A', x: 180, y: 70 },
      { id: 'B', x: 420, y: 70 },
      { id: 'C', x: 90,  y: 220 },
      { id: 'D', x: 300, y: 200 },
      { id: 'E', x: 510, y: 220 },
      { id: 'F', x: 300, y: 320 }
    ];

    this.state.graphEdges = [
      { u: 'A', v: 'B' },
      { u: 'A', v: 'C' },
      { u: 'A', v: 'D' },
      { u: 'B', v: 'E' },
      { u: 'C', v: 'D' },
      { u: 'D', v: 'F' },
      { u: 'E', v: 'F' }
    ];

    this.renderGraphDeck();
    this.renderGraphStage();
    this.updateCode('Graph Init', CODE_TEMPLATES.graph.init, 0);
  }

  renderGraphDeck() {
    this.dom.deckForms.innerHTML = `
      <div class="op-group">
        <label>Start Node:</label>
        <select id="graph_start_node">
          ${this.state.graphNodes.map(n => `<option value="${n.id}">Vertex ${n.id}</option>`).join('')}
        </select>
        <button class="btn-primary" id="btn_graph_bfs">Run BFS</button>
        <button class="btn-secondary" id="btn_graph_dfs">Run DFS</button>
      </div>

      <div class="op-group">
        <label>Add Edge:</label>
        <input type="text" id="graph_edge_u" class="input-field" placeholder="From (e.g. C)" style="width:75px">
        <input type="text" id="graph_edge_v" class="input-field" placeholder="To (e.g. E)" style="width:75px">
        <button class="btn-secondary" id="btn_graph_add_edge">Add Edge</button>
      </div>

      <div class="op-group">
        <button class="btn-secondary" id="btn_graph_reset">Default Graph</button>
      </div>
    `;

    document.getElementById('btn_graph_bfs').addEventListener('click', () => this.handleGraphBFS());
    document.getElementById('btn_graph_dfs').addEventListener('click', () => this.handleGraphDFS());
    document.getElementById('btn_graph_add_edge').addEventListener('click', () => this.handleGraphAddEdge());
    document.getElementById('btn_graph_reset').addEventListener('click', () => {
      this.initGraph();
      this.log('Reset to standard sample graph.', 'info');
    });
  }

  renderGraphStage(visitedNodes = new Set(), activeNode = null) {
    this.dom.badgeSize.textContent = `|V|=${this.state.graphNodes.length}, |E|=${this.state.graphEdges.length}`;
    
    const svgWidth = 600;
    const svgHeight = 380;
    const nodeMap = new Map(this.state.graphNodes.map(n => [n.id, n]));

    let edgesSvg = this.state.graphEdges.map(e => {
      const u = nodeMap.get(e.u);
      const v = nodeMap.get(e.v);
      if (!u || !v) return '';
      const isTraversed = visitedNodes.has(e.u) && visitedNodes.has(e.v);
      return `<line x1="${u.x}" y1="${u.y}" x2="${v.x}" y2="${v.y}" class="graph-edge ${isTraversed ? 'active-edge' : ''}" />`;
    }).join('');

    let nodesSvg = this.state.graphNodes.map(n => {
      let cls = '';
      if (n.id === activeNode) cls = 'match';
      else if (visitedNodes.has(n.id)) cls = 'visiting';

      return `
        <g class="graph-node-group" transform="translate(${n.x}, ${n.y})">
          <circle r="22" class="graph-node-circle ${cls}" />
          <text class="graph-node-text">${n.id}</text>
        </g>
      `;
    }).join('');

    this.dom.stage.innerHTML = `
      <div class="canvas-container">
        <svg class="dsa-svg-stage" viewBox="0 0 ${svgWidth} ${svgHeight}">
          ${edgesSvg}
          ${nodesSvg}
        </svg>
      </div>
    `;
  }

  getGraphAdjList() {
    const adj = new Map();
    this.state.graphNodes.forEach(n => adj.set(n.id, []));
    this.state.graphEdges.forEach(e => {
      if (adj.has(e.u)) adj.get(e.u).push(e.v);
      if (adj.has(e.v)) adj.get(e.v).push(e.u);
    });
    return adj;
  }

  async handleGraphBFS() {
    const startNode = document.getElementById('graph_start_node').value;
    const adj = this.getGraphAdjList();

    this.setBusy(true, `Running Breadth-First Search from ${startNode}...`);
    this.updateCode('Breadth-First Search (BFS)', CODE_TEMPLATES.graph.bfs, 2);

    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);

    this.log(`[BFS] Enqueued start node ${startNode}.`, 'highlight');

    while (queue.length > 0) {
      const u = queue.shift();
      this.renderGraphStage(visited, u);
      this.log(`[BFS] Dequeued and processed Vertex ${u}`, 'success');
      await this.sleep(600);

      const neighbors = adj.get(u) || [];
      for (const v of neighbors) {
        if (!visited.has(v)) {
          visited.add(v);
          queue.push(v);
          this.log(`[BFS] Discovered new neighbor ${v}, added to Queue.`, 'info');
          this.renderGraphStage(visited, u);
          await this.sleep(400);
        }
      }
    }

    this.log(`BFS traversal complete. Explored all reachable components in O(V + E) time.`, 'success');
    await this.sleep(600);
    this.renderGraphStage(visited);
    this.setBusy(false);
  }

  async handleGraphDFS() {
    const startNode = document.getElementById('graph_start_node').value;
    const adj = this.getGraphAdjList();

    this.setBusy(true, `Running Depth-First Search from ${startNode}...`);
    this.updateCode('Depth-First Search (DFS)', CODE_TEMPLATES.graph.dfs, 2);

    const visited = new Set();

    const dfsRecursive = async (node) => {
      visited.add(node);
      this.renderGraphStage(visited, node);
      this.log(`[DFS] Visiting Vertex ${node}...`, 'success');
      await this.sleep(600);

      const neighbors = adj.get(node) || [];
      for (const v of neighbors) {
        if (!visited.has(v)) {
          this.log(`[DFS] Exploring unvisited edge (${node} &rarr; ${v})`, 'highlight');
          await dfsRecursive(v);
        }
      }
    };

    await dfsRecursive(startNode);
    this.log(`DFS traversal complete. Explored depth branches.`, 'success');
    await this.sleep(600);
    this.renderGraphStage(visited);
    this.setBusy(false);
  }

  handleGraphAddEdge() {
    const u = document.getElementById('graph_edge_u').value.trim().toUpperCase();
    const v = document.getElementById('graph_edge_v').value.trim().toUpperCase();

    const nodeIds = this.state.graphNodes.map(n => n.id);
    if (!nodeIds.includes(u) || !nodeIds.includes(v)) {
      this.log(`Invalid vertices! Valid vertices: ${nodeIds.join(', ')}`, 'error');
      return;
    }

    if (u === v) {
      this.log(`Self-loops not permitted in this demo.`, 'warn');
      return;
    }

    const exists = this.state.graphEdges.some(e => (e.u === u && e.v === v) || (e.u === v && e.v === u));
    if (exists) {
      this.log(`Edge (${u}, ${v}) already exists!`, 'warn');
      return;
    }

    this.state.graphEdges.push({ u, v });
    this.renderGraphStage();
    this.log(`Added new undirected edge between ${u} and ${v}.`, 'success');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.playground = new PlaygroundEngine();
  window.playground.populateDSPills('linear');
});