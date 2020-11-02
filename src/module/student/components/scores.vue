<template>
  <div>
    <div
      class="detail-tabs-button">
      <el-button
        size="small"
        type="primary">
        新增
      </el-button>
      <div>
        <el-select
          v-model="value"
          size="small"
          placeholder="请选择年级"
          style="width:180px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select
          v-model="value"
          size="small"
          placeholder="请选择学期"
          style="width:180px;margin-left:5px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select
          v-model="value"
          size="small"
          placeholder="是否包含测试"
          style="width:180px;margin-left:5px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <el-table
      :data="tableDate"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="年级"
        width="180" />
      <el-table-column
        prop="size"
        label="学期"
        width="180" />
      <el-table-column
        prop="uploadTime"
        label="是否测试"
        width="180" />
      <el-table-column
        prop="uploadTime"
        label="语文"
        width="180" />
      <el-table-column
        prop="uploadTime"
        label="数学"
        width="180" />
      <el-table-column
        prop="uploadTime"
        label="英语"
        width="180" />
      <el-table-column
        prop="remark"
        label="备注"
        width="auto" />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template
          slot-scope="scope">
          <el-button
            @click="editItem(scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click="deleteItem(scope.row)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableDate: [

        ],
        options: [

        ]
      }
    },
    methods: {
      editItem () {

      },
      deleteItem () {

      }
    }
  }
</script>