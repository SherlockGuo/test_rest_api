import * as configModel from './test_runners/models/config'

export const USING_CONFIG = 'CTPConfig2'

export const CTPConfig: configModel.config = {
  BASEURL: `https://api.sphere.io`,
  NEED_ACCESS_TOKEN: true,
  CLIENT_ID: process.env.CTP_CLIENT_ID,
  CLIENT_SECRET: process.env.CTP_CLIENT_SECRET,
  PROJECT_NAME: process.env.CTP_PROJECT_KEY
}

export const CTPConfig2: configModel.config = {
  BASEURL: `https://api.sphere.io`,
  NEED_ACCESS_TOKEN: true,
  CLIENT_ID: 'OISyLLFUUvrId3n720hdIKgb',
  CLIENT_SECRET: '5M5KtrookcfrhKaFyZhxkrJdDjDSaGK5',
  PROJECT_NAME: 'test1-110'
}

export const LocalConfig: configModel.config = {
  BASEURL: 'http://localhost:8088',
  NEED_ACCESS_TOKEN: false
}

export const LocalConfig2: configModel.config = {
  BASEURL: 'http://192.168.8.135:8088',
  NEED_ACCESS_TOKEN: false
}

export const DemoConfig: configModel.config = {
  BASEURL: 'http://www.baidu.com',
  NEED_ACCESS_TOKEN: false
}
