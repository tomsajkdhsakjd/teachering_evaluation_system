<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="编号" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column label="课程" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.courseName }}
      </template>
    </el-table-column>
    <el-table-column label="累计得分" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status">
          {{ row.countScore }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'
import store from '@/store'
export default {
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList(store.getters.token).then(response => {
        this.list = response.result
      })
    }
  }
}
</script>
