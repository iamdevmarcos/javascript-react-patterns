let observers = []

export default Object.freeze({
  subscribe: func => observers.push(func),
  notify: data => observers.forEach(observer => observer(data)),
  unsubscribe: func => {
    [...observers].forEach((observe, index) => {
      if(observe === func) observers.splice(index, 1);
    })
  }
})