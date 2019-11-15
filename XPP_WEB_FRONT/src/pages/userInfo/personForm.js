import { Input, Radio, DatePicker } from 'antd';
import style from './style.less';

export default ({ userName, userSex } = {}) => {
  return [
    {
      name: 'userName',
      label: '个人姓名',
      component: <Input></Input>,
      initialValue: userName,
      rules: [{ required: true, message: '请输入个人姓名' }],
    },
    {
      name: 'userSex',
      label: '个人性别',
      initialValue: userSex,
      component: (
        <Radio.Group>
          <Radio value="0" className={style.sex}>
            男
          </Radio>
          <Radio value="1">女</Radio>
        </Radio.Group>
      ),
    },
    {
      label: '',
      component: null,
    },
    {
      label: '个人出生日期',
      component: <DatePicker getPopupContainer={trigger => trigger.parentNode}></DatePicker>,
    },
    {
      label: '个人地址',
      component: <Input></Input>,
    },
    {
      label: '个人邮编',
      component: <Input></Input>,
    },
    {
      label: '个人电话',
      component: <Input></Input>,
    },
    {
      label: '个人邮箱（已绑定）',
      component: <Input disabled></Input>,
    },
    {
      label: '个人手机（已绑定）',
      component: <Input disabled></Input>,
    },
    {
      label: '个人微信',
      component: <Input></Input>,
    },
    {
      label: '个人QQ',
      component: <Input></Input>,
    },
    {
      label: '个人网址',
      component: <Input addonBefore="Http://"></Input>,
    },
    {
      label: '个人简介',
      component: <Input.TextArea placeholder="可输入512字"></Input.TextArea>,
      span: 3,
    },
    {
      label: '个人备注',
      component: <Input.TextArea placeholder="可输入512字"></Input.TextArea>,
      span: 3,
    },
  ];
};
