'use strict';
const e = require('./index.3840a89d.js'),
  n = require('./Input.3f4c4aa8.js'),
  t = {
    name: 'Switch',
    common: e.commonLight,
    self: (n) => {
      const {
        primaryColor: t,
        opacityDisabled: o,
        borderRadius: i,
        textColor3: a,
      } = n;
      return Object.assign(Object.assign({}, e.commonVars$1), {
        iconColor: a,
        textColor: 'white',
        loadingColor: t,
        opacityDisabled: o,
        railColor: 'rgba(0, 0, 0, .14)',
        railColorActive: t,
        buttonBoxShadow:
          '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
        buttonColor: '#FFF',
        railBorderRadiusSmall: i,
        railBorderRadiusMedium: i,
        railBorderRadiusLarge: i,
        buttonBorderRadiusSmall: i,
        buttonBorderRadiusMedium: i,
        buttonBorderRadiusLarge: i,
        boxShadowFocus: `0 0 0 2px ${e.changeColor(t, { alpha: 0.2 })}`,
      });
    },
  },
  o = e.cB(
    'switch',
    '\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n',
    [
      e.cE(
        'children-placeholder',
        '\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n '
      ),
      e.cE('rail-placeholder', '\n display: flex;\n flex-wrap: none;\n '),
      e.cE(
        'button-placeholder',
        '\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n '
      ),
      e.cB(
        'base-loading',
        '\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ',
        [
          e.iconSwitchTransition({
            left: '50%',
            top: '50%',
            originalTransform: 'translateX(-50%) translateY(-50%)',
          }),
        ]
      ),
      e.cE(
        'checked, unchecked',
        '\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n '
      ),
      e.cE(
        'checked',
        '\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n '
      ),
      e.cE(
        'unchecked',
        '\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n '
      ),
      e.c('&:focus', [
        e.cE('rail', '\n box-shadow: var(--n-box-shadow-focus);\n '),
      ]),
      e.cM('round', [
        e.cE('rail', 'border-radius: calc(var(--n-rail-height) / 2);', [
          e.cE('button', 'border-radius: calc(var(--n-button-height) / 2);'),
        ]),
      ]),
      e.cNotM('disabled', [
        e.cNotM('icon', [
          e.cM('rubber-band', [
            e.cM('pressed', [
              e.cE('rail', [
                e.cE('button', 'max-width: var(--n-button-width-pressed);'),
              ]),
            ]),
            e.cE('rail', [
              e.c('&:active', [
                e.cE('button', 'max-width: var(--n-button-width-pressed);'),
              ]),
            ]),
            e.cM('active', [
              e.cM('pressed', [
                e.cE('rail', [
                  e.cE(
                    'button',
                    'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));'
                  ),
                ]),
              ]),
              e.cE('rail', [
                e.c('&:active', [
                  e.cE(
                    'button',
                    'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));'
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      e.cM('active', [
        e.cE('rail', [
          e.cE(
            'button',
            'left: calc(100% - var(--n-button-width) - var(--n-offset))'
          ),
        ]),
      ]),
      e.cE(
        'rail',
        '\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ',
        [
          e.cE(
            'button-icon',
            '\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ',
            [e.iconSwitchTransition()]
          ),
          e.cE(
            'button',
            '\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n '
          ),
        ]
      ),
      e.cM('active', [
        e.cE('rail', 'background-color: var(--n-rail-color-active);'),
      ]),
      e.cM('loading', [e.cE('rail', '\n cursor: wait;\n ')]),
      e.cM('disabled', [
        e.cE('rail', '\n cursor: not-allowed;\n opacity: .5;\n '),
      ]),
    ]
  ),
  i = Object.assign(Object.assign({}, e.useTheme.props), {
    size: {
      type: String,
      default: 'medium',
    },
    value: {
      type: [String, Number, Boolean],
      default: void 0,
    },
    loading: Boolean,
    defaultValue: {
      type: [String, Number, Boolean],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: void 0,
    },
    round: {
      type: Boolean,
      default: true,
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    checkedValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: false,
    },
    railStyle: Function,
    rubberBand: {
      type: Boolean,
      default: true,
    },
    onChange: [Function, Array],
  });
let a;
const r = e.defineComponent({
  name: 'Switch',
  props: i,
  setup(i) {
    void 0 === a &&
      (a =
        'undefined' == typeof CSS ||
        (void 0 !== CSS.supports && CSS.supports('width', 'max(1px)')));
    const { mergedClsPrefixRef: r, inlineThemeDisabled: l } = e.useConfig(i),
      c = e.useTheme('Switch', '-switch', o, t, i, r),
      d = e.useFormItem(i),
      { mergedSizeRef: s, mergedDisabledRef: h } = d,
      u = e.ref(i.defaultValue),
      b = e.toRef(i, 'value'),
      p = n.useMergedState(b, u),
      v = e.computed(() => p.value === i.checkedValue),
      g = e.ref(false),
      f = e.ref(false),
      w = e.computed(() => {
        const { railStyle: e } = i;
        if (e) {
          return e({
            focused: f.value,
            checked: v.value,
          });
        }
      });
    function m(n) {
      const { 'onUpdate:value': t, onChange: o, onUpdateValue: a } = i,
        { nTriggerFormInput: r, nTriggerFormChange: l } = d;
      t && e.call(t, n);
      a && e.call(a, n);
      o && e.call(o, n);
      u.value = n;
      r();
      l();
    }
    const x = e.computed(() => {
        const { value: n } = s,
          {
            self: {
              opacityDisabled: t,
              railColor: o,
              railColorActive: i,
              buttonBoxShadow: r,
              buttonColor: l,
              boxShadowFocus: d,
              loadingColor: h,
              textColor: u,
              iconColor: b,
              [e.createKey('buttonHeight', n)]: p,
              [e.createKey('buttonWidth', n)]: v,
              [e.createKey('buttonWidthPressed', n)]: g,
              [e.createKey('railHeight', n)]: f,
              [e.createKey('railWidth', n)]: w,
              [e.createKey('railBorderRadius', n)]: m,
              [e.createKey('buttonBorderRadius', n)]: x,
            },
            common: { cubicBezierEaseInOut: y },
          } = c.value;
        let k, S, C;
        return (
          a
            ? ((k = `calc((${f} - ${p}) / 2)`),
              (S = `max(${f}, ${p})`),
              (C = `max(${w}, calc(${w} + ${p} - ${f}))`))
            : ((k = e.pxfy((e.depx(f) - e.depx(p)) / 2)),
              (S = e.pxfy(Math.max(e.depx(f), e.depx(p)))),
              (C =
                e.depx(f) > e.depx(p)
                  ? w
                  : e.pxfy(e.depx(w) + e.depx(p) - e.depx(f)))),
          {
            '--n-bezier': y,
            '--n-button-border-radius': x,
            '--n-button-box-shadow': r,
            '--n-button-color': l,
            '--n-button-width': v,
            '--n-button-width-pressed': g,
            '--n-button-height': p,
            '--n-height': S,
            '--n-offset': k,
            '--n-opacity-disabled': t,
            '--n-rail-border-radius': m,
            '--n-rail-color': o,
            '--n-rail-color-active': i,
            '--n-rail-height': f,
            '--n-rail-width': w,
            '--n-width': C,
            '--n-box-shadow-focus': d,
            '--n-loading-color': h,
            '--n-text-color': u,
            '--n-icon-color': b,
          }
        );
      }),
      y = l
        ? e.useThemeClass(
            'switch',
            e.computed(() => s.value[0]),
            x,
            i
          )
        : void 0;
    return {
      handleClick: function () {
        i.loading ||
          h.value ||
          (p.value !== i.checkedValue
            ? m(i.checkedValue)
            : m(i.uncheckedValue));
      },
      handleBlur: function () {
        f.value = false;
        (function () {
          const { nTriggerFormBlur: e } = d;
          e();
        })();
        g.value = false;
      },
      handleFocus: function () {
        f.value = true;
        (function () {
          const { nTriggerFormFocus: e } = d;
          e();
        })();
      },
      handleKeyup: function (e) {
        i.loading ||
          h.value ||
          (' ' === e.key &&
            (p.value !== i.checkedValue
              ? m(i.checkedValue)
              : m(i.uncheckedValue),
            (g.value = false)));
      },
      handleKeydown: function (e) {
        i.loading ||
          h.value ||
          (' ' === e.key && (e.preventDefault(), (g.value = true)));
      },
      mergedRailStyle: w,
      pressed: g,
      mergedClsPrefix: r,
      mergedValue: p,
      checked: v,
      mergedDisabled: h,
      cssVars: l ? void 0 : x,
      themeClass: null == y ? void 0 : y.themeClass,
      onRender: null == y ? void 0 : y.onRender,
    };
  },
  render() {
    const {
      mergedClsPrefix: n,
      mergedDisabled: t,
      checked: o,
      mergedRailStyle: i,
      onRender: a,
      $slots: r,
    } = this;
    null == a || a();
    const {
        checked: l,
        unchecked: c,
        icon: d,
        'checked-icon': s,
        'unchecked-icon': h,
      } = r,
      u = !(e.isSlotEmpty(d) && e.isSlotEmpty(s) && e.isSlotEmpty(h));
    return e.h(
      'div',
      {
        role: 'switch',
        'aria-checked': o,
        class: [
          `${n}-switch`,
          this.themeClass,
          u && `${n}-switch--icon`,
          o && `${n}-switch--active`,
          t && `${n}-switch--disabled`,
          this.round && `${n}-switch--round`,
          this.loading && `${n}-switch--loading`,
          this.pressed && `${n}-switch--pressed`,
          this.rubberBand && `${n}-switch--rubber-band`,
        ],
        tabindex: this.mergedDisabled ? void 0 : 0,
        style: this.cssVars,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyup: this.handleKeyup,
        onKeydown: this.handleKeydown,
      },
      e.h(
        'div',
        {
          class: `${n}-switch__rail`,
          'aria-hidden': 'true',
          style: i,
        },
        e.resolveWrappedSlot(l, (t) =>
          e.resolveWrappedSlot(c, (o) =>
            t || o
              ? e.h(
                  'div',
                  {
                    'aria-hidden': true,
                    class: `${n}-switch__children-placeholder`,
                  },
                  e.h(
                    'div',
                    { class: `${n}-switch__rail-placeholder` },
                    e.h('div', { class: `${n}-switch__button-placeholder` }),
                    t
                  ),
                  e.h(
                    'div',
                    { class: `${n}-switch__rail-placeholder` },
                    e.h('div', { class: `${n}-switch__button-placeholder` }),
                    o
                  )
                )
              : null
          )
        ),
        e.h(
          'div',
          { class: `${n}-switch__button` },
          e.resolveWrappedSlot(d, (t) =>
            e.resolveWrappedSlot(s, (o) =>
              e.resolveWrappedSlot(h, (i) =>
                e.h(e.NIconSwitchTransition, null, {
                  default: () =>
                    this.loading
                      ? e.h(e.NBaseLoading, {
                          key: 'loading',
                          clsPrefix: n,
                          strokeWidth: 20,
                        })
                      : this.checked && (o || t)
                      ? e.h(
                          'div',
                          {
                            class: `${n}-switch__button-icon`,
                            key: o ? 'checked-icon' : 'icon',
                          },
                          o || t
                        )
                      : this.checked || (!i && !t)
                      ? null
                      : e.h(
                          'div',
                          {
                            class: `${n}-switch__button-icon`,
                            key: i ? 'unchecked-icon' : 'icon',
                          },
                          i || t
                        ),
                })
              )
            )
          ),
          e.resolveWrappedSlot(
            l,
            (t) =>
              t &&
              e.h(
                'div',
                {
                  key: 'checked',
                  class: `${n}-switch__checked`,
                },
                t
              )
          ),
          e.resolveWrappedSlot(
            c,
            (t) =>
              t &&
              e.h(
                'div',
                {
                  key: 'unchecked',
                  class: `${n}-switch__unchecked`,
                },
                t
              )
          )
        )
      )
    );
  },
});
exports.NSwitch = r;
