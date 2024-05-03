
## 重力と慣性（等価原理）

　特殊相対性理論において、各地点の座標と時間について議論していたと思うが、一定速度で動く観測者というのは実際にないことが多い。というのも、地球上で観測を行うにあたって重力や地球の自転といった影響を受けていることからも伺える。一例として、等速円運動で自転している地球上で球の運動を見てみると
$$
    m\frac{\mathrm{d}^2z}{\mathrm{d}s^2}=
    -mg
$$
であることから、外部から見ると
$$
    m\frac{\mathrm{d}^2z'}{\mathrm{d}s'^2}=
    mr^2\omega^2-mg
$$
というように慣性力が働く。ただ、ここでこの式を
$$
    mr^2\omega^2-mg=-m(g-r^2\omega^2)=-mg'
$$
というようにすると、あたかも重力が変化したように見ることもできる。これ以外にも、加速する系では慣性力と重力が働いているが、互いに等価的なものとしてみなすことができる。実際、Newtonの運動方程式において
$$
    m_I
    \frac{\mathrm{d}^2\bm{r}}{\mathrm{d}s^2}=\bm{F}
$$
と書かれるが、ここに現れる質量は物体の慣性の度合いを表すものであるので**慣性質量**と呼ばれる。必要なときには添え字 $I$ をつけて表す。 Newton力学にはもう一つ別の種類の質量が登場する。それは万有引力の法則
$$
    F=G\frac{m_{1G}m_{2G}}{r^2}
$$
に使われる質量である。これは物体の慣性とは概念として全く別のものであり**重力質量**と呼ばれる。普通、添え字 $G$ をつけて慣性質量と区別する。上記の式によれば、地球表面で重力質量 $m_G$ の物体が受ける重力は
$$
    F=m_G g
$$ 
となる。ここで $g$ は、$M_G,R$ を地球の重力質量、半径として
$$
    g=G\frac{M_G}{R^2}
$$
で与えられる。さて、地球上での質点の自由落下の方程式というのは、簡単に鉛直方向 $z$ だけを考慮すると
$$
    m_I
    \frac{\mathrm{d}^2\bm{r}}{\mathrm{d}s^2}=
    -m_G g
$$
となる。この式の両辺を $m_I$ で割ると
$$
    \frac{\mathrm{d}^2\bm{r}}{\mathrm{d}s^2}=
    -\frac{m_G}{m_I} g
$$
を得る。すなわち自由落下の加速度は比 $m_G/m_I$ に比例する。ところがGalileiの有名なPisaの斜塔の実験以降、他の摩擦力などなければ自由落下の加速度は全ての物体で等しいことが知られている。これは $m_G/m_I$ が**全ての物体について等しい値を持つ**ことを意味する。

　斜塔の落下実験はあまり精度のよいものとはいえないであろうが、振り子の実験などはもっと精密な測定ということができよう。2種類の質量の比例関係についてはその後さらに正確な実験が行われた。特に19世紀末から20世紀末にかけてE$\"\mathrm{o}$tv$\"\mathrm{o}$sが優れた実験を行っている。それによれば $m_G/m_I$ を多くの物体について測定した結果、$10^{-9}$ という実験制度の範囲ですべて同じ値になった。さらにもっと最近のDicke、Braginskiらの測定によると$10^{-12}$くらいの精度で $m_G$ と $m_I$ の比例関係が成り立っていることが確認されている。2種類の質量が正確に比例しているのであれば、その比の値を1に選ぶのが便利である。もし比の値が1でなかったならば、どちらかの質量測定の目盛りを変更して比が1になるようにすればよい。要するにすべての物体について $m_G=m_I$ と考えればよいのである。

　以上の議論から、前回登場した測地線方程式において等加速度 $g$ で運動した時の計量を求めることで重力の影響を含めた変換を求めることができることになる。同時に、特殊相対性理論のことも考慮する必要があるため、改めて特殊相対性理論での加速度の取り扱いがどうなるかを見てみることにする。まず、特殊相対性論での運動方程式は、
$$
    \frac
    {\mathrm{d}p^k}
    {\mathrm{d}\tau}=
    f^k
    \rightarrow
    \frac
    {\mathrm{d}p^k}
    {\mathrm{d}t}=
    F^k、
    \left(
    p^k=
    m_0
    \frac{\mathrm{d}x^k}
    {\mathrm{d}\tau}
    \right)
$$
となるが、ここで
$$
    \mathrm{d}\tau=
    \frac{\mathrm{d}s}{c}
$$
であることを踏まえると、以下のように書ける。
$$
    \dot{s}
    \frac
    {\mathrm{d}p^k}
    {\mathrm{d}s}=
    F^k、
    \left(
    p^k=
    m_0c
    \frac{\mathrm{d}x^k}
    {\mathrm{d}s}
    \right)
$$
ここで、z方向（3成分目）で重力が働いているとすると
$$
    \dot{s}
    \frac
    {\mathrm{d}p^3}
    {\mathrm{d}s}=
    -m_0g、
    \left(
    p^3=
    m_0c
    \frac{\mathrm{d}x^3}
    {\mathrm{d}s}
    \right)
$$
となるため、以下の式が得られる。
$$
    \dot{s}
    \frac
    {\mathrm{d}^2x^3}
    {\mathrm{d}s^2}=
    -\frac{g}{c}
    \rightarrow
    \frac
    {\mathrm{d}^2x^3}
    {\mathrm{d}s^2}=
    -\frac{g}{c^2}
    \left(
        \frac
        {\mathrm{d}x^0}
        {\mathrm{d}s}
    \right)
$$
また、第0成分ではどのようになっていたかというと
$$
    \dot{s}
    \frac
    {\mathrm{d}p^0}
    {\mathrm{d}s}=
    F^0=
    \frac{1}{c}
    (\bm{F}\cdot\bm{v})、
    p^0=
    m_0c
    \frac{\mathrm{d}x^0}
    {\mathrm{d}s}
$$
であったので、以下のとおりになる。
$$
    \frac
    {\mathrm{d}^2x^0}
    {\mathrm{d}s^2}=
    -\frac{g}{c^2}
    \left(
    \frac
    {\mathrm{d}x^3}
    {\mathrm{d}s}
    \right)
$$

一方で、測地線方程式において第0,3成分は
$$
    \frac{\mathrm{d}^2x^0}
    {\mathrm{d}s^2}+
    \Gamma^{0}_{\mu\nu}
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=0、
    \frac{\mathrm{d}^2x^3}
    {\mathrm{d}s^2}+
    \Gamma^{3}_{\mu\nu}
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=0
$$










$$
    x'^0=x^0、x'^1=x^1、x'^2=x^2、
    x'^3=x^3+\frac{g}{2c^2}(x^0)^2
$$
となるため、計量は以下の通りになる。
$$
    g_{\mu\nu}=
    \left[
        1+
        \left(
            \frac{g}{c^2}x^0
        \right)^2
    \right]
    \delta_{\mu\nu}^{00}+
    \delta_{\mu\nu}^{11}+
    \delta_{\mu\nu}^{22}+
    \delta_{\mu\nu}^{33}+
    \frac{g}{c^2}x^0
    (\delta_{\mu\nu}^{30}+
    \delta_{\mu\nu}^{03})
$$
そのため、計量の逆行列に関して $ g^{k\nu}g_{\mu\nu}=\delta_{\mu}^k$ という式が成り立つことから
$$
    \left[
        1+
        \left(
            \frac{g}{c^2}x^0
        \right)^2
    \right]g^{k0}
    \delta_{\mu}^{0}+
    g^{k1}\delta_{\mu}^{1}+
    g^{k2}\delta_{\mu}^{2}+
    g^{k3}\delta_{\mu}^{3}+
    \frac{g}{c^2}x^0
    (g^{k0}\delta_{\mu}^{3}+
    g^{k3}\delta_{\mu}^{0})=
    \delta_{\mu}^k
$$
が成立しているため、整理すると以下の関係式が得られる。
$$
    g^{k\nu}=
    \delta_{00}^{k\nu}+
    \delta_{11}^{k\nu}+
    \delta_{22}^{k\nu}+
    \left[
        1+
        \left(
            \frac{g}{c^2}x^0
        \right)^2
    \right]
    \delta_{33}^{k\nu}-
    \frac{g}{c^2}x^0
    (\delta_{03}^{k\nu}+
    \delta_{30}^{k\nu})
$$
そのため、クリストフェル記号において
$$
    \Gamma^{k}_{\mu\nu}=
    \left[
    x^0g^{k0}
    \left(
        \frac{g}{c^2}
    \right)^2+
    \frac{g}{c^2}g^{k3}
    \right]\delta_{\mu\nu}^{00}=
    \frac{g}{c^2}
    \delta_3^k\delta_{\mu\nu}^{00}
$$
となるため測地線方程式は以下の通りになる。
$$
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}+
    \Gamma^{k}_{\mu\nu}
    \frac{\mathrm{d}x^{\mu}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{\nu}}{\mathrm{d}s}=
    \frac{\mathrm{d}^2x^k}
    {\mathrm{d}s^2}+
    \frac{g}{c^2}\delta_3^k
    \frac{\mathrm{d}x^0}{\mathrm{d}s}
    \frac{\mathrm{d}x^0}{\mathrm{d}s}=0
$$
各成分ごとに分けて書くと以下のようになる。
$$
    \frac{\mathrm{d}^2x^0}{\mathrm{d}s^2}=
    \frac{\mathrm{d}^2x^1}{\mathrm{d}s^2}=
    \frac{\mathrm{d}^2x^2}{\mathrm{d}s^2}=0、
    \frac{\mathrm{d}^2x^3}
    {\mathrm{d}s^2}+
    \frac{g}{c^2}
    \frac{\mathrm{d}x^{0}}{\mathrm{d}s}
    \frac{\mathrm{d}x^{0}}{\mathrm{d}s}=0
$$
ここで、 $x^0$ の二階微分が0であることから
$$
    \frac{\mathrm{d}x^{0}}{\mathrm{d}s}=A、
    （A:定数）
$$
とすると、