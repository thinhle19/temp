'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const e = require('./index.3840a89d.js'),
  a = (a) => (e.pushScopeId('data-v-05a7a767'), (a = a()), e.popScopeId(), a),
  t = {
    class: 'w mine',
    isFloat: '',
  },
  n = { class: 'mine_title' },
  s = a(() => e.createBaseVNode('div', { class: 'mine_active' }, null, -1)),
  r = a(() => e.createBaseVNode('div', { class: 'mine_bottom' }, null, -1)),
  o = {
    key: 0,
    class: 'mine_content',
  },
  i = { class: 'mine_content_item' },
  c = { class: 'left' },
  l = { class: 'right' },
  d = a(() => e.createBaseVNode('div', { class: 'btns' }, null, -1)),
  u = { class: 'mine_content_item' },
  m = { class: 'left' },
  f = { class: 'right' },
  p = a(() => e.createBaseVNode('div', { class: 'btns' }, null, -1)),
  g = { class: 'mine_content_item' },
  v = { class: 'left' },
  B = { class: 'right' },
  N = { class: 'mine_content_item' },
  y = { class: 'left' },
  V = { class: 'flex ai-center remaining_characters_container' },
  S = {
    key: 0,
    class: 'share-tips',
  },
  _ = {
    key: 0,
    class: 'fs-14 text-red warning-tip',
  },
  k = a(() => e.createBaseVNode('div', { class: 'btns' }, null, -1)),
  h = { class: 'mine_content_item' },
  I = { class: 'left' },
  D = { class: 'right' },
  b = a(() => e.createBaseVNode('div', { class: 'btns' }, null, -1)),
  C = a(() =>
    e.createBaseVNode(
      'div',
      { class: 'out-tip' },
      '注\uFF1A重新登录不会影响号的登录\uFF08除Line\uFF09\uFF0C请放心退出\u3002',
      -1
    )
  ),
  x = e.defineComponent({
    __name: 'index',
    setup(a) {
      const { t: x } = e.useLocale(),
        w = e.useRouter(),
        R = e.useKeyStore(),
        W = e.useUserStore(),
        E = e.ref('0'),
        T = e.useTranslateStore(),
        M = () => {
          w.replace({ name: 'login' });
          R.clearAll();
        },
        A = e.computed(() => {
          const e = Number.parseInt(E.value);
          if (Number.isNaN(e)) {
            return false;
          }
          return (
            e > (W.userInfo.shareRemainingWord || W.userInfo.remainingWord)
          );
        });
      return (
        e.onMounted(() => {
          (async () => {
            try {
              const { data: a } = await e.getCodeInfo({ code: 'WARING' });
              E.value = a.value;
            } catch (a) {}
          })();
        }),
        (a, w) => {
          var R;
          const E = e.resolveComponent('svg-icon');
          return (
            e.openBlock(),
            e.createElementBlock('div', t, [
              e.createBaseVNode(
                'div',
                n,
                e.toDisplayString(e.unref(x)('Account Management')),
                1
              ),
              s,
              r,
              e.unref(W) && e.unref(W).userInfo
                ? (e.openBlock(),
                  e.createElementBlock('div', o, [
                    e.createBaseVNode('div', i, [
                      e.createBaseVNode(
                        'div',
                        c,
                        e.toDisplayString(e.unref(x)('Username')) + '\uFF1A',
                        1
                      ),
                      e.createBaseVNode(
                        'div',
                        l,
                        e.toDisplayString(e.unref(W).userInfo.name),
                        1
                      ),
                      d,
                    ]),
                    e.createBaseVNode('div', u, [
                      e.createBaseVNode(
                        'div',
                        m,
                        e.toDisplayString(e.unref(x)('Mail')) + '\uFF1A',
                        1
                      ),
                      e.createBaseVNode(
                        'div',
                        f,
                        e.toDisplayString(e.unref(W).userInfo.email),
                        1
                      ),
                      p,
                    ]),
                    e.createBaseVNode('div', g, [
                      e.createBaseVNode(
                        'div',
                        v,
                        e.toDisplayString(e.unref(x)('Package Type')) +
                          '\uFF1A',
                        1
                      ),
                      e.createBaseVNode(
                        'div',
                        B,
                        e.toDisplayString(
                          e.unref(x)(
                            null ==
                              (R = e.unref(e.translateInfo)[
                                e.unref(W).userInfo.vipType
                              ])
                              ? void 0
                              : R.key
                          )
                        ),
                        1
                      ),
                    ]),
                    e.createBaseVNode('div', N, [
                      e.createBaseVNode(
                        'div',
                        y,
                        e.toDisplayString(
                          e.unref(x)('Number of remaining characters')
                        ) + '\uFF1A',
                        1
                      ),
                      e.createBaseVNode(
                        'div',
                        {
                          class: e.normalizeClass([
                            'right flex-d',
                            { warning: e.unref(A) },
                          ]),
                        },
                        [
                          e.createBaseVNode('div', V, [
                            e.createBaseVNode(
                              'span',
                              null,
                              e.toDisplayString(
                                e.unref(W).userInfo.shareRemainingWord ||
                                  e.unref(W).userInfo.remainingWord
                              ),
                              1
                            ),
                            e.unref(W).userInfo.shareRemainingWord
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  'span',
                                  S,
                                  e.toDisplayString(
                                    e.unref(x)(
                                      'Shared master account characters'
                                    )
                                  ),
                                  1
                                ))
                              : e.createCommentVNode('', true),
                            e.unref(A)
                              ? (e.openBlock(),
                                e.createBlock(E, {
                                  key: 1,
                                  name: 'warn',
                                  size: '16',
                                  class: 'warn-svg',
                                }))
                              : e.createCommentVNode('', true),
                          ]),
                          e.unref(T).isConnect
                            ? e.createCommentVNode('', true)
                            : (e.openBlock(),
                              e.createElementBlock(
                                'span',
                                _,
                                e.toDisplayString(
                                  e.unref(x)(
                                    'Failed to update characters, please switch server and log in again'
                                  )
                                ),
                                1
                              )),
                        ],
                        2
                      ),
                      k,
                    ]),
                    e.createBaseVNode('div', h, [
                      e.createBaseVNode(
                        'div',
                        I,
                        e.toDisplayString(e.unref(x)('Registration time')) +
                          '\uFF1A',
                        1
                      ),
                      e.createBaseVNode(
                        'div',
                        D,
                        e.toDisplayString(e.unref(W).userInfo.createTime),
                        1
                      ),
                      b,
                    ]),
                    e.createBaseVNode(
                      'div',
                      {
                        class: 'mine_layout',
                        onClick: M,
                      },
                      e.toDisplayString(e.unref(x)('Sign out')),
                      1
                    ),
                    C,
                  ]))
                : (e.openBlock(),
                  e.createElementBlock(
                    'div',
                    {
                      key: 1,
                      class: 'mine_layout',
                      onClick: M,
                    },
                    e.toDisplayString(e.unref(x)('Sign out')),
                    1
                  )),
            ])
          );
        }
      );
    },
  }),
  w = e._export_sfc(x, [['__scopeId', 'data-v-05a7a767']]);
exports.default = w;
