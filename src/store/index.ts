import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '../lib/createId';
import router from '../router/index';

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    dialogAddVisible: false,
    recordList: [],
    createRecordError: null,
    tagList: [],
    currentTag: undefined,
    addTagResult: { code: 2, message: '' }
  } as RootState,

  mutations: {
    // records
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = recordCopy.createdAt || new Date().toISOString();
      state.recordList && state.recordList.push(recordCopy);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    // tags
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    // 新增标签测试
    changeVisualizationTrue(state) {
      state.dialogAddVisible = true;
    },
    changeVisualization(state, name) {
      state.dialogAddVisible = false;
    },

    addTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.includes(name)) {
        state.addTagResult = { code: 0, message: '标签名重复了' }
      } else {
        const id = createId().toString();
        state.tagList.push({ id, name: name });
        store.commit('saveTags')
        state.addTagResult = { code: 1, message: '新增标签成功' }
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    updateTag(state, payload: { id: string; name: string }) {
      const { id, name } = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.includes(name)) {
          window.alert('标签名重复了！')
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags')
        }
      }
    },
    removeTag(state, id: string) {
      const index = state.tagList.findIndex(item => item.id === id);
      state.tagList.splice(index, 1);
      store.commit('saveTags')
      router.back();
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store;