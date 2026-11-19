window.HOME_DATA = {
  account: {
    name: '用户5678',
    phone: '13800006721',
    memberNo: 'HMC2026001',
    joinedAt: '2026-01-12 10:20:00',
    profile: {
      patient: {
        name: '李桂芳', gender: '女', birthday: '1948-03-12', idType: '1',
        idNo: '310104194803120024', age: 78, mobile: '', province: '北京市', city: '北京市',
        county: '朝阳区', address: '', selfCare: '半自理'
      },
      contact: { name: '张女士', mobile: '13800006721', phone: '13800006721', relation: '女儿' }
    }
  },
  idTypes: [['1', '身份证'], ['2', '护照'], ['3', '港澳居民来往内地通行证'], ['4', '台湾居民来往大陆通行证']],
  serviceAreas: [
    { province: '北京市', city: '北京市', districts: ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '通州区'] },
    { province: '上海市', city: '上海市', districts: ['浦东新区', '徐汇区', '静安区', '长宁区', '杨浦区'] },
    { province: '天津市', city: '天津市', districts: ['和平区', '河西区', '南开区', '滨海新区'] },
    { province: '山东省', city: '淄博市', districts: ['张店区', '淄川区', '临淄区', '周村区'] },
    { province: '广东省', city: '深圳市', districts: ['南山区', '福田区', '罗湖区', '宝安区', '龙岗区'] },
    { province: '浙江省', city: '杭州市', districts: ['西湖区', '上城区', '滨江区', '拱墅区'] },
    { province: '江苏省', city: '南京市', districts: ['鼓楼区', '玄武区', '建邺区', '秦淮区'] },
    { province: '四川省', city: '成都市', districts: ['武侯区', '锦江区', '高新区', '成华区'] },
    { province: '湖北省', city: '武汉市', districts: ['武昌区', '江汉区', '洪山区', '汉阳区'] },
    { province: '福建省', city: '厦门市', districts: ['思明区', '湖里区', '集美区'] }
  ],
  serviceDays: [3, 4, 5, 6, 7],
  materialTypes: ['出院小结', '出院通知', '病历资料', '检查报告', '身份证明', '其他就医材料'],
  cards: [
    {
      id: 'v1', status: 'used', productName: '居家照护服务权益', cardNum: 'HMC202600001',
      cardType: 'homecare', cardTypeName: '居家照护服务权益', productCode: 'HC001',
      startTime: '2026-01-01', endTime: '2027-12-31', userName: '李桂芳'
    },
    {
      id: 'v2', status: 'unused', productName: '居家照护服务权益', cardNum: 'HMC202600002',
      cardType: 'homecare', cardTypeName: '居家照护服务权益', productCode: 'HC001',
      startTime: '2026-01-01', endTime: '2027-12-31', userName: '李桂芳'
    }
  ],
  seedOrders: [
    {
      id: 'seed-h1', no: 'HMC20261115001', status: 'serving',
      serviceType: '居家照护', serviceId: 'homecare',
      province: '北京市', city: '北京市', district: '朝阳区',
      address: '望京街道阜通东大街 6 号院 3 号楼 1202',
      startDate: '2026-11-18', startTime: '09:00', serviceDays: 5,
      card: {
        cardNum: 'HMC202600001', cardType: 'homecare', cardTypeName: '居家照护服务权益',
        productName: '居家照护服务权益', productCode: 'HC001',
        startTime: '2026-01-01', endTime: '2027-12-31'
      },
      voucherId: 'v1',
      patient: {
        name: '李桂芳', gender: '女', idType: '1', idNo: '310104194803120024',
        birthday: '1948-03-12', age: 78, mobile: '', province: '北京市', city: '北京市',
        county: '朝阳区', address: '', selfCare: '半自理'
      },
      staffGender: '女', staffNote: '希望护理员有术后照护经验，夜间起夜需要协助。',
      materials: [],
      contact: { name: '张女士', mobile: '13800006721', phone: '13800006721' },
      emergency: { name: '', phone: '' },
      note: '希望护理员有术后照护经验，夜间起夜需要协助。',
      caregiver: { name: '陈晓梅', gender: '女', age: 46, phone: '13900001234', level: '中级养老护理员', years: 5, rating: 4.8 },
      createdAt: '2026-11-15 16:20:00',
      syncStatus: 'success', syncedAt: '2026-11-15 16:20:00',
      timeline: [
        { title: '服务申请已提交', desc: '照护顾问已收到居家照护需求，待评估后安排', time: '11-15 16:20:00' },
        { title: '服务评估完成，已安排护理员', desc: '陈晓梅 · 中级养老护理员', time: '11-15 18:05:00' },
        { title: '服务开始', desc: '护理员已上门签到，照护开始', time: '11-18 09:02:00' }
      ]
    }
  ]
};
