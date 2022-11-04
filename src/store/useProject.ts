export const useProject = (init = 10) => {

    const count = ref(init)

    // 固定加几？increaseCount参数
    const set = (increaseCount?: number): void => {
        count.value =increaseCount
    }

    const get = (): number => {
        return count.value
    }

    return {
      count,
      set,
      get
    }

  }