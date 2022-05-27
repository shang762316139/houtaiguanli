<template>
  <div class="userControl">
    <!-- 头部 -->
    <div class="userControl-header">
      <a-input placeholder="用户名" v-model="formData" />

      <a-button type="primary" icon="search" @click="searchHand(formData)">
        查询
      </a-button>
      <a-button type="primary" icon="redo" @click="resetHand()">
        重置
      </a-button>
      <a-button type="primary" icon="plus" @click="addHand()"> 新增 </a-button>
      <a-button type="primary" icon="edit" @click="updateHand()">
        修改
      </a-button>

      <a-button type="primary" icon="delete" @click="delHand()">
        删除
      </a-button>
    </div>
    <!-- 表格 -->
    <div class="userControl-form">
      <a-table
        bordered
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
      >
        <template v-slot:action>
          <a href="javascript:;">Delete</a>
        </template>
      </a-table>
    </div>
    <!-- 有选择项的修改弹框 -->
    <div class="frame-content" v-if="selectedRows.length == 1">
      <a-modal v-model="visible" title="修改">
        <a-form-model ref="ruleForm" :model="editfrom" :rules="setrules">
          <!-- 第一项 -->
          <a-form-model-item
            ref="user"
            label="用户名"
            prop="user"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="editfrom.name"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <!-- 第二项 -->
          <a-form-model-item
            label="所属部门"
            prop="region"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-select v-model="editfrom.region" placeholder="">
              <a-select-option value="shanghai"> 内部运营 </a-select-option>
              <a-select-option value="beijing"> 技术部</a-select-option>
            </a-select>
          </a-form-model-item>
          <!-- 第三项 -->
          <a-form-item
            label="密码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="input placeholder" />
          </a-form-item>
          <!-- 第四项 -->
          <a-form-model-item
            ref="email"
            label="邮箱"
            prop="email"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="editfrom.email"
              @blur="
                () => {
                  $refs.email.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <!-- 第五项 -->
          <a-form-model-item
            ref="phone"
            label="手机号"
            prop="phone"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="editfrom.phone"
              @blur="
                () => {
                  $refs.phone.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
    <!-- 没有选择项的修改弹框 -->
    <div v-else>
      <a-modal v-model="visible" title="信息">
        <p>请选择一条记录</p>
        <template slot="footer">
          <a-button type="primary" @click="handleOk">确定</a-button>
        </template>
      </a-modal>
    </div>
    <!-- 有选择项的重置弹框 -->
    <div class="frame-content" v-if="selectedRows.length == 1">
      <a-modal v-model="resetvisible" title="重置">
        <a-form-model ref="ruleForm" :model="resetform" :rules="setrules">
          <!-- 第一项 -->
          <a-form-model-item
            ref="user"
            label="用户名"
            prop="user"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="resetform.name"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <!-- 第二项 -->
          <a-form-model-item
            ref="region"
            label="所属部门"
            prop="region"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-select v-model="resetform.region" placeholder="">
              <a-select-option value="shanghai"> 内部运营 </a-select-option>
              <a-select-option value="beijing"> 技术部</a-select-option>
            </a-select>
          </a-form-model-item>
          <!-- 第三项 -->
          <a-form-item
            label="密码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input placeholder="input placeholder" />
          </a-form-item>
          <!-- 第四项 -->
          <a-form-model-item
            ref="email"
            label="邮箱"
            prop="email"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="resetform.email"
              @blur="
                () => {
                  $refs.email.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <!-- 第五项 -->
          <a-form-model-item
            ref="phone"
            label="手机号"
            prop="phone"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              v-model="resetform.phone"
              @blur="
                () => {
                  $refs.phone.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
    <!-- 没有选择项的重置弹框 -->
    <div v-else>
      <a-modal v-model="resetvisible" title="信息">
        <p>请选择一条记录</p>
        <template slot="footer">
          <a-button type="primary" @click="resethandleOk">确定</a-button>
        </template>
      </a-modal>
    </div>
  </div>
</template>
   

<script>
const columns = [
  {
    title: "用户ID",
    dataIndex: "key",
    width: 100,
  },
  {
    title: "用户名",
    dataIndex: "user",
    width: 150,
  },
  {
    title: "邮箱",
    dataIndex: "email",
    width: 200,
  },
  {
    title: "手机号",
    dataIndex: "phone",
    width: 150,
  },
  {
    title: "状态",
    dataIndex: "state",
    width: 100,
  },
  {
    title: "创建时间",
    dataIndex: "gettime",
    width: 100,
  },
  {
    title: "角色名称",
    dataIndex: "name",
    width: 100,
  },
];
const data = [
  {
    key: 0,
    user: "张一",
    email: "762316139@qq.com",
    phone: "15234456345",
    state: "正常",
    gettime: new Date(),
    name: "产品角色",
  },
  {
    key: 1,
    user: "张二",
    email: "762316139@qq.com",
    phone: "15234456345",
    state: "正常",
    gettime: new Date(),
    name: "产品角色",
  },
];
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
export default {
  name: "BeileihoutaiUserControl",

  data() {
    return {
      formItemLayout,
      resetvisible: false,
      visible: false,
      formData: "",
      data,
      columns,
      selectedRows: [],
      // 修改数据
      editfrom: {
        user: "",
        region: "技术部",
        email: "",
        phone: "",
        name: "",
      },
      // 重置数据
      resetform: {
        user: "",
        region: "技术部",
        email: "",
        phone: "",
        name: "",
      },
      setrules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedRows = selectedRows;
          this.visible = false;
          this.resetvisible = false;
          console.log(selectedRows.length, "pp");
          console.log(this.selectedRows, "cc");
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`
            // "selectedRows: ",
          );
        },
        getCheckboxProps: (record) => (
          console.log(record.user, "///"),
          {
            props: {
              disabled: record.name === "Disabled User", // Column configuration not to be checked
              name: record.name,
            },
          }
        ),
      };
    },
  },
  mounted() {},

  methods: {
    searchHand(a) {
      console.log("查询", a);
    },
    resetHand() {
      console.log("重置");
      this.resetvisible = true;
      this.resetform = this.selectedRows[0];
    },
    addHand() {
      console.log("新增");
    },
    updateHand(s) {
      this.visible = true;
      console.log("修改", s);
      this.editfrom = this.selectedRows[0];
    },
    delHand() {
      console.log("删除成功");
    },
    handleOk() {
      console.log("修改成功");
      this.visible = false;
    },
    resethandleOk() {
      console.log("重置成功");
      this.resetvisible = false;
    },
  },
};
</script>

<style scoped>
.userControl-header {
  display: flex;
}
.userControl-header .ant-btn-primary {
  margin-left: 2%;
}
.userControl-form {
  margin-top: 20px;
}
/deep/ .ant-modal-content .ant-modal-header {
  background: #eee !important;
}
.ant-form-item {
  display: flex;
}
/deep/ .ant-form-explain {
  width: 128%;
}
/deep/ .ant-form-item-control {
  width: 220%;
}
</style>