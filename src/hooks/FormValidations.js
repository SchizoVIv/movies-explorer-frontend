export const validatorsLogin = {
  email: {
    required: value => {
      return value === '';
    },
    isEmail: value => {
      return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
  },
  password: {
    required: value => {
      return value === '';
    },
    minLength: value => {
      return value.length < 8;
    },
    containNumbers: value => {
      return !/[0-9]/.test(value);
    }
  }
};

export const validatorsReg = {
  name: {
    required: value => {
      return value === '';
    },
    minLength: value => {
      return value.length < 2;
    },
    maxLength: value => {
      return value.length > 30;
    },
    isName: value => {
      return !/^[а-яА-ЯёЁa-zA-Z0-9-;._\s]+$/.test(value);
    }
  },
  email: {
    required: value => {
      return value === '';
    },
    isEmail: value => {
      return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
  },
  password: {
    required: value => {
      return value === '';
    },
    minLength: value => {
      return value.length < 8;
    },
    containNumbers: value => {
      return !/[0-9]/.test(value);
    }
  }
};

export const validatorsProfile = {
  name: {
    required: value => {
      return value === '';
    },
    minLength: value => {
      return value.length < 2;
    },
    maxLength: value => {
      return value.length > 30;
    },
    isName: value => {
      return !/^[а-яА-ЯёЁa-zA-Z0-9-;._\s]+$/.test(value);
    }
  },
  email: {
    required: value => {
      return value === '';
    },
    isEmail: value => {
      return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
  },
  password: {
    required: value => {
      return value === '';
    },
    minLength: value => {
      return value.length < 8;
    },
    containNumbers: value => {
      return !/[0-9]/.test(value);
    }
  }
};
