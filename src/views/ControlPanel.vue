<template>
    <div class="control-panel">
      <h2>空调控制面板</h2>
  
      <!-- 模式选择 -->
      <div class="mode-select">
        <label for="mode">模式：</label>
        <select v-model="mode" @change="switchMode">
          <option value="cooling">制冷</option>
          <option value="heating">制热</option>
        </select>
      </div>
  
      <!-- 温度调节 -->
      <div class="temperature-control" v-if="mode === 'cooling'">
        <label for="temperature">温度调节 (16°C - 30°C):</label>
        <input
          type="range"
          id="temperature"
          v-model="temperature"
          min="16"
          max="30"
          step="1"
          @input="updateTemperature"
        />
        <span>{{ temperature }}°C</span>
      </div>
  
      <div class="temperature-control" v-if="mode === 'heating'">
        <label for="temperature">温度调节 (15°C - 25°C):</label>
        <input
          type="range"
          id="temperature"
          v-model="temperature"
          min="15"
          max="25"
          step="1"
          @input="updateTemperature"
        />
        <span>{{ temperature }}°C</span>
      </div>
  
      <!-- 开关机 -->
      <div class="power-control">
        <button @click="togglePower">{{ isOn ? '关机' : '开机' }}</button>
      </div>
  
      <!-- 查询计费 -->
      <div class="billing-info">
        <button @click="showBillingInfo">查询计费</button>
        <div v-if="billingInfo">
          <p>当前计费：{{ billingInfo }} 元</p>
        </div>
      </div>
  
      <!-- 查询使用时长 -->
      <div class="usage-time">
        <button @click="showUsageTime">查询使用时长</button>
        <div v-if="usageTime">
          <p>使用时长：{{ usageTime }} 小时</p>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mode: 'cooling',   // 默认模式为制冷
        temperature: 22,   // 默认温度
        isOn: false,       // 空调开关状态
        billingInfo: null, // 计费信息
        usageTime: null,   // 使用时长
      };
    },
    methods: {
      // 切换温度
      updateTemperature() {
        console.log(`当前温度: ${this.temperature}°C, 模式: ${this.mode === 'cooling' ? '制冷' : '制热'}`);
        // 这里可以添加逻辑来更新温度（例如与后端交互）
      },
      // 切换模式
      switchMode() {
        console.log(`切换模式: ${this.mode === 'cooling' ? '制冷' : '制热'}`);
        // 在这里可以添加与后端交互的逻辑
      },
      // 开关机操作
      togglePower() {
        this.isOn = !this.isOn;
        console.log(`空调已${this.isOn ? '开机' : '关机'}`);
        // 这里可以调用后端接口来控制空调的开关
      },
      // 查询计费
      showBillingInfo() {
        if (this.isOn) {
          // 假设计费逻辑是根据时间和模式来计算的
          this.billingInfo = (this.temperature * 0.1).toFixed(2); // 示例：根据温度计算
          console.log(`当前计费: ${this.billingInfo}`);
        } else {
          this.billingInfo = null;
          console.log('空调已关机，无法查询计费');
        }
      },
      // 查询使用时长
      showUsageTime() {
        if (this.isOn) {
          // 假设使用时长计算：模拟每小时增加1小时
          this.usageTime = Math.floor(Math.random() * 10) + 1; // 示例：随机生成一个使用时长（1~10小时）
          console.log(`当前使用时长: ${this.usageTime} 小时`);
        } else {
          this.usageTime = null;
          console.log('空调已关机，无法查询使用时长');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .control-panel {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .mode-select,
  .temperature-control,
  .power-control,
  .billing-info,
  .usage-time {
    margin-bottom: 20px;
  }
  
  .mode-select label,
  .temperature-control label {
    font-size: 16px;
    margin-right: 10px;
  }
  
  .temperature-control input[type="range"] {
    width: 100%;
    margin: 10px 0;
  }
  
  .temperature-control span {
    font-size: 18px;
    font-weight: bold;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .billing-info,
  .usage-time {
    font-size: 16px;
  }
  </style>
  