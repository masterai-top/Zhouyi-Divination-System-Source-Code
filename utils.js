const jqPromiseAjax = params => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: params.url,
      type: params.type || 'get',
      headers: params.headers || {},
      data: params.data || {},
      success(res) {
        resolve(res)
      },
      error(err) {
        reject(err)
      }
    })
  }).catch(e => {})
}

const sendRequest = config => {
  let token = window.localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(config.method || 'GET', config.url)
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.response))
        } catch (e) {
          // console.log(e)
          resolve(xhr.response)
        }
      } else {
        if (xhr.status == 401) {
          window.location.href = 'login.html'
        }
        reject(new Error(xhr.response))
      }
    })
    config.data ? xhr.send(JSON.stringify(config.data)) : xhr.send()
  })
}

// value为日期数组，例 ["2022-12-13","2022-12-20"]
const getSectionDate = value => {
  let arr = []
  let str_b = value[0].split('-')
  let str_e = value[1].split('-')
  let date_b = new Date()
  date_b.setUTCFullYear(str_b[0], str_b[1] - 1, str_b[2])
  let date_e = new Date()
  date_e.setUTCFullYear(str_e[0], str_e[1] - 1, str_e[2])
  let unixDb = date_b.getTime() - 24 * 60 * 60 * 1000
  let unixDe = date_e.getTime() - 24 * 60 * 60 * 1000
  for (let j = unixDb; j <= unixDe; ) {
    j = j + 24 * 60 * 60 * 1000
    arr.push(this.timestampToTime(new Date(parseInt(j))))
  }
  console.log(arr)
  return arr
}

function timestampToTime(date) {
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = date.getDate()
  return new Date((Y + M + D + ' 00:00:00').replace(/-/g, '/'))
}

function savePicById(cid) {
  const shareContent = document.getElementById(cid)
  const width = shareContent.offsetWidth
  const height = shareContent.offsetHeight
  const canvas = document.createElement('canvas')
  const scale = 1

  canvas.width = width * scale
  canvas.height = height * scale
  canvas.getContext('2d').scale(scale, scale)

  const opts = {
    scale: scale,
    canvas: canvas,
    logging: true,
    width: width,
    height: height,
    useCORS: true
  }

  html2canvas(shareContent, opts).then(function (canvas) {
    const context = canvas.getContext('2d')

    context.mozImageSmoothingEnabled = false
    context.webkitImageSmoothingEnabled = false
    context.msImageSmoothingEnabled = false
    context.imageSmoothingEnabled = false
    const img = Canvas2Image.saveAsImage(canvas, canvas.width, canvas.height, parseInt(new Date().getTime() / 1000) + '.jpg')
  })
}

/**
 * 设置本地月份
 * @param date 处理前日期
 * @param number 需要处理的月份（正负皆可，例如：+1就是加一个月）
 * @returns {Date|*}
 */
function localSetMonth(date, number) {
  const currentMonth = date.getMonth()

  // 获取传入月份的最大天数
  let tempDate1 = new Date()
  tempDate1.setDate(1)
  tempDate1.setMonth(currentMonth + 1)
  tempDate1 = new Date(tempDate1.getFullYear(), tempDate1.getMonth(), 0)
  const currentMonthMaxDate = tempDate1.getDate()

  // 获取处理后月份的最大天数
  let tempDate2 = new Date()
  tempDate2.setDate(1)
  tempDate2.setMonth(currentMonth + number + 1)
  tempDate2 = new Date(tempDate2.getFullYear(), tempDate2.getMonth(), 0)
  const afterHandlerMonthMaxDate = tempDate2.getDate()

  // 判断两个日期是否相等(就一定不会出现跳月的情况)
  if (currentMonthMaxDate === afterHandlerMonthMaxDate) {
    date.setMonth(date.getMonth() + number)
    return date
  }

  // 如果两个月份不相等，则判断传入日期是否在月底，如果是月底则目标日期也设置为月底
  if (date.getDate() === currentMonthMaxDate) {
    tempDate2.setDate(afterHandlerMonthMaxDate)
    return tempDate2
  }

  // 判断闰年
  if (date.getDate() >= afterHandlerMonthMaxDate) {
    tempDate2.setDate(afterHandlerMonthMaxDate)
    return tempDate2
  }

  date.setMonth(date.getMonth() + number)
  return date
}

// 日期格式化
const parseTime = function (time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time
        .replace(new RegExp(/-/gm), '/')
        .replace('T', ' ')
        .replace(new RegExp(/\.[\d]{3}/gm), '')
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
