import { createStore } from 'vuex';

export default createStore({
  state: {
    rooms: []
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    }
  },
  actions: {
    fetchRooms({ commit }) {
      // 假设这里获取房间数据
      const roomsData = [
        { id: 1, name: '101', temperature: 22, windSpeed: '中', isOn: false },
        { id: 2, name: '102', temperature: 24, windSpeed: '低', isOn: true }
      ];
      commit('setRooms', roomsData);
    }
  },
  getters: {
    getRooms: (state) => state.rooms
  }
});
