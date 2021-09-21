const {add} =require('./add')
// 1. return value
// 2. call other function
// 3. change state
// 4. throw error


test("should 1+1 = 2", () => {
  // 准备测试数据集 => given
  const a = 1
  const b = 1
  // 触发测试动作 => when
  const r = add(a,b)
  // 验证 => then
  expect(r).toBe(2)
})
