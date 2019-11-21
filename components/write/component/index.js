import Icon from 'solar-vue/icon'
const write = {
  name: 'SvWrite'
}
write.props = {
  value: {
    type: [String, Number]
  },
  label: String,
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'tel', 'number', 'textarea', 'password'].includes(value)
    }
  },
  regexp: RegExp,
  LeftIcon: String,
  RightIcon: String,
  clear: {
    type: Boolean,
    default: true
  },
  errmessage: String,
  required: Boolean,
  placeholder: String,
  maxLength: Number,
  minLength: Number,
  align: {
    type: String,
    validator(value) {
      return ['left', 'right', 'center'].includes(value)
    }
  }
}
write.data = function() {
  return {
    clearIcon: false,
    reg: false,
    state: true
  }
}
write.methods = {
  input(e) {
    const { type, maxLength } = this
    let value = e.target.value
    value = value.replace(/\s/g, '')
    if (maxLength) {
      value = value.substring(0, maxLength)
    }
    if (type === 'tel' || type === 'number') {
      value = value.replace(/[^0-9]/gi, '')
    }
    e.target.value = value
    this.$emit('input', value)
    this.judge(value)
  },
  focus(e) {
    this.clearIcon = true
    const value = e.target.value
    this.$emit('on-focus', value)
  },
  blur(e) {
    setTimeout(() => {
      this.clearIcon = false
    }, 0)
    this.judge(e.target.value)
  },
  clearFn() {
    this.$emit('input', '')
    this.$emit('on-clear', '')
    this.judge('')
  },
  judge(value) {
    const { required, regexp, minLength } = this
    let state = true
    if (required) {
      if (!value) {
        this.reg = true
        state = false
      } else {
        this.reg = false
        state = true
      }
      this.state = state
      return
    }
    if (value) {
      if (regexp) {
        if (!regexp.test(value)) {
          this.reg = true
          state = false
        } else {
          this.reg = false
          state = true
        }
      } else {
        if (minLength) {
          if (value.length < minLength) {
            this.reg = true
            state = false
          }
        }
      }

      this.state = state
    }
  }
}
write.render = function(h) {
  const {
    value,
    type,
    label,
    required,
    placeholder,
    clear,
    clearIcon,
    RightIcon,
    errmessage,
    reg,
    align
  } = this
  return (
    <div class="sv-write">
      <div
        class={{ 'sv-write-container': true, 'sv-write-required': required }}
      >
        <div class="sv-write-label">
          <span>{label}</span>
        </div>
        <div class="sv-write-body">
          <div class="sv-write-inner">
            {type !== 'textarea' && (
              <input
                type={type}
                class={{
                  'sv-write-input': true,
                  ['sv-write-' + align]: !!align
                }}
                placeholder={placeholder}
                value={value}
                onFocus={this.focus}
                onBlur={this.blur}
                onInput={this.input}
              />
            )}
            {type === 'textarea' && (
              <textarea
                type="text"
                class="sv-write-input"
                placeholder={placeholder}
                value={value}
                onFocus={this.focus}
                onBlur={this.blur}
                onInput={this.input}
              ></textarea>
            )}
            {clear && !!value && clearIcon && (
              <i
                class="sv-write-clear sv-iconfont sv-icon-close"
                onClick={this.clearFn}
              ></i>
            )}
            {RightIcon && <Icon name={RightIcon}></Icon>}
          </div>
          {reg && errmessage && (
            <div
              class={{
                'sv-write-err': true,
                ['sv-write-' + align]: !!align
              }}
            >
              {errmessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default write
