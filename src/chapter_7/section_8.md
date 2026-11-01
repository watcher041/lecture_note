
## 特殊相対性理論から一般相対性理論へ

 　特殊相対性理論では、座標系の変換としてLorentz変換が利用されていた。

$$
    x'=\gamma(x-\beta w)、
    y'=y、
    z'=z、
    w'=\gamma(w-\beta x)、
$$
$$
    x=\gamma(x'+\beta w')、
    y=y'、
    z=z'、
    w=\gamma(w'+\beta x')、
$$
$$
    w=ct、
    w'=ct'、
    \beta=\frac{V}{c}、
    \gamma=\frac{1}{\sqrt{1-\beta^2}}
$$

この変換の間では、ある位置ベクトル $\bm{s}$ の微小変化に対して

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}x^{\mu}\bm{b}_\mu=
    \mathrm{d}x'^{\mu}\bm{b}'_\mu、
    (\mathrm{d}\bm{s})^2=
    g_{\mu\nu}
    \mathrm{d}x^{\mu}\mathrm{d}x^{\nu}=
    g_{\mu\nu}'
    \mathrm{d}x'^{\mu}\mathrm{d}x'^{\nu}
$$
$$
    \mathrm{d}x'^\mu=
    \lr{
        \pp{x'^\mu}{x^\nu}
    }
    \mathrm{d}x^\nu、
    \mathrm{d}x^\nu=
    \lr{
        \pp{x^\nu}{x'^\mu}
    }
    \mathrm{d}x'^\mu、
    \bm{b}'_\mu=
    \lr{
        \pp{x^\nu}{x'^\mu}
    }
    \bm{b}_\nu、
    \bm{b}_\nu=
    \lr{
        \pp{x'^\mu}{x^\nu}
    }
    \bm{b}'_\mu
$$
$$
    g_{\mu\nu} = \bm{b}_\mu\cdot\bm{b}_\nu、
    g'_{\mu\nu} = \bm{b}'_\mu\cdot\bm{b}'_\nu
$$


が成り立つ。ただし、ここで $w$ が時間を含む特殊な変数であることを考慮して以下の通りにしている。

$$
    \mathrm{d}x^0=\mathrm{d}w、
    \mathrm{d}x^1=\mathrm{d}x、
    \mathrm{d}x^2=\mathrm{d}y、
    \mathrm{d}x^3=\mathrm{d}z
$$
$$
    \mathrm{d}x'^0=\mathrm{d}w'、
    \mathrm{d}x'^1=\mathrm{d}x'、
    \mathrm{d}x'^2=\mathrm{d}y'、
    \mathrm{d}x'^3=\mathrm{d}z'
$$

また $g_{\mu\nu}$ の成分は、基底ベクトルの内積をどう定めるかで決まり、座標変換で基底が変換されると一般には変化する。一方で、相対論的力学で出てきた固有時の微小変化

$$
    \mathrm{d}\tau = \mathrm{d}t'\sqrt{1-\frac{\bm{v}'^2}{c^2}} = \mathrm{d}t\sqrt{1-\frac{\bm{v}^2}{c^2}}
$$
$$
    \bm{v}'^2=
    \lr{\dd{x'^1}{t'}}^2+
    \lr{\dd{x'^2}{t'}}^2+
    \lr{\dd{x'^3}{t'}}^2、
    \bm{v}^2=
    \lr{\dd{x^1}{t}}^2+
    \lr{\dd{x^2}{t}}^2+
    \lr{\dd{x^3}{t}}^2
$$

は座標系によらない量であったため、$\mathrm{d}x^0 = c\,\mathrm{d}t、\mathrm{d}x'^0 = c\mathrm{d}t'$ を用いて

$$
    (c\,\mathrm{d}\tau)^2 = (\mathrm{d}x'^0)^2 - (\mathrm{d}x'^1)^2 - (\mathrm{d}x'^2)^2 - (\mathrm{d}x'^3)^2 = (\mathrm{d}x^0)^2 - (\mathrm{d}x^1)^2 - (\mathrm{d}x^2)^2 - (\mathrm{d}x^3)^2
$$

と書ける。そこで $(\mathrm{d}s)^2 = (c\,\mathrm{d}\tau)^2$ と定めると、

$$
    (\mathrm{d}s)^2=
    g_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu=
    (\mathrm{d}x^0)^2 - (\mathrm{d}x^1)^2 - (\mathrm{d}x^2)^2 - (\mathrm{d}x^3)^2
$$

として係数を比べることで

$$
    g_{\mu\nu} = g'_{\mu\nu} = \eta_{\mu\nu} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}
$$

が得られる。この $\eta_{\mu\nu}$ を**Minkowski計量**と呼び、$(\mathrm{d}s)^2 $ も以下のように同じ形になる。

$$
    (\mathrm{d}s)^2 = \eta_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu = \eta_{\mu\nu}\mathrm{d}x'^\mu\mathrm{d}x'^\nu
$$

また、$\mathrm{d}x^\mu$ が反変ベクトルであることから固有時で割った

$$
    u^0=
    \dd{x^0}{\tau}、
    u^1=
    \dd{x^1}{\tau}、
    u^2=
    \dd{x^2}{\tau}、
    u^3=
    \dd{x^3}{\tau}
    \rightarrow
    u^\mu=
    \dd{x^\mu}{\tau}
$$

という量 $u^\mu$（**4元速度**）も反変ベクトルになる。そのため、運動量も反変ベクトルの形で

$$
    p^0=
    m_0u^0、
    p^1=
    m_0u^1、
    p^2=
    m_0u^2、
    p^3=
    m_0u^3
    \rightarrow
    p^\mu=
    m_0u^\mu
$$

といように 4元運動量 $p^\mu$ で表記することができ、力に関しても運動方程式から

$$
    f^0=
    \dd{p^0}{\tau}、
    f^1=
    \dd{p^1}{\tau}、
    f^2=
    \dd{p^2}{\tau}、
    f^3=
    \dd{p^3}{\tau}
    \rightarrow
    f^\mu=
    \dd{p^\mu}{\tau}
$$

というように **4元力** $f^\mu$ で表記される。分かりやすいように $(w,x,y,z)$ の表記にしてみると、まず4元速度は

$$
    u^0 = \frac{c}{\sqrt{1-\dfrac{\bm{v}^2}{c^2}}}、
    u^1 = \frac{v_x}{\sqrt{1-\dfrac{\bm{v}^2}{c^2}}}、
    u^2 = \frac{v_y}{\sqrt{1-\dfrac{\bm{v}^2}{c^2}}}、
    u^3 = \frac{v_z}{\sqrt{1-\dfrac{\bm{v}^2}{c^2}}}
$$

となる。したがって 4元運動量は

$$
    p^0 = \frac{E_r}{c}、
    p^1 = p_x、
    p^2 = p_y、
    p^3 = p_z、
    E_r=\frac{m_0c^2}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

と、時間成分がエネルギーを $c$ で割ったもの、空間成分がこれまでの相対論的運動量になる。また、4元力に関しても相対論力学の運動方程式

$$
    \dd{\bm{p}}{\tau}=
    \bm{f}、
     \dd{E_r}{\tau}=
    (\bm{f}\cdot\bm{v})、
    \bm{p}=
    \frac{m_0\bm{v}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    E_r=
    \frac{m_0c^2}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

と比べてみることで、以下のように対応していることが分かる。

$$
    f^0 = \frac{1}{c}(\bm{f}\cdot\bm{v})、
    f^1 = f_x、
    f^2 = f_y、
    f^3 = f_z
$$

ここまでのことから、最終的に運動方程式は反変ベクトルの形で

$$
    f^\mu=
    \dd{p^\mu}{\tau}、
    p^\mu=
    m_0u^\mu、
    u^\mu=
    \dd{x^\mu}{\tau}
$$

と表記されることになるが、この形はあくまでLorentz変換の範囲のもので一般的な加速度系では成り立たない。そこで、座標のとり方によらない形で運動方程式を扱うため、一度解析力学の形に変更してみる。解析力学において運動方程式は、ラグランジアン $\mathcal{L}$ と一般化座標 $q$ を用いて

$$
    \dd{}{t}
    \lr{
        \pp{\mathcal{L}}{\dot{q}}
    } - \pp{\mathcal{L}}{q} = 0
$$

と書かれ、この形は一般化座標 $q$ のとり方によらない。また、運動方程式の方も比べやすくするために、時間 $t$ を用いて

$$
    F^\mu=
    \dd{p^\mu}{t}、
    p^\mu=
    \frac{m_0v^\mu}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    v^\mu=
    \dd{x^\mu}{t}
$$

と置き換え、力 $F^{\mu}$ もポテンシャル $U$ で記述されるもの（保存力）としたとき

$$
    F^\mu=
    -\lr{
        \pp{U}{x^\mu}
    }
$$

となるため、各成分ごとに比べてると以下の通りになる。

$$
    \pp{\mathcal{L}}{c}=
    \frac{m_0c}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \pp{\mathcal{L}}{v_x}=
    \frac{m_0v_x}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \pp{\mathcal{L}}{v_y}=
    \frac{m_0v_y}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \pp{\mathcal{L}}{v_z}=
    \frac{m_0v_z}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$
$$
    \pp{\mathcal{L}}{t}=
    -\lr{
        \pp{U}{t}
    }、
    \pp{\mathcal{L}}{x}=
    -\lr{
        \pp{U}{x}
    }、
     \pp{\mathcal{L}}{y}=
     -\lr{
        \pp{U}{y}
    }、
    \pp{\mathcal{L}}{z}=
    -\lr{
        \pp{U}{z}
    }
$$

なお、第0成分 $F^0 = \dfrac{\mathrm{d}p^0}{\mathrm{d}t}$ は独立な式ではない。$p^0 = \dfrac{E_K}{c}$ であるから $F^0 = \dfrac{1}{c}\dfrac{\mathrm{d}E_K}{\mathrm{d}t}$ であり、空間成分の運動方程式から導かれる仕事とエネルギーの関係に等しい。実際、$p^\mu p_\mu = (p^0)^2 - \boldsymbol{p}^2 = m_0^2c^2$ を $t$ で微分すると $p^0F^0 = \boldsymbol{p}\cdot\boldsymbol{F}$ となり、

$$
F^0 = \frac{\boldsymbol{F}\cdot\boldsymbol{v}}{c}
$$

が得られる。保存力で $U$ が時間に陽に依存しないときは $\boldsymbol{F}\cdot\boldsymbol{v} = -\dfrac{\mathrm{d}U}{\mathrm{d}t}$ なので、

$$
F^0 = -\frac{1}{c}\frac{\mathrm{d}U}{\mathrm{d}t}、\quad \frac{\mathrm{d}}{\mathrm{d}t}\left(E_K + U\right) = 0
$$

と、エネルギー保存則になる。これは、$F^i = -\dfrac{\partial U}{\partial x^i}$ を $i=0$ にそのまま拡張した $-\dfrac{\partial U}{\partial x^0} = 0$ とは異なる。




































であるから、ラグランジアンが以下の通りになることが分かる（静止エネルギーがポテンシャルエネルギーの一部のような振る舞いをする）。

$$
    \mathcal{L}=
    -m_0c^2\sqrt{1-\frac{\bm{v}^2}{c^2}}-U
    \simeq
    \frac{1}{2}m\bm{v}^2-(m_0c^2+U)
$$

次に、前回でも登場した計量 $g_{\mu\nu}$ により

$$
    \sqrt{1-\frac{\bm{v}^2}{c^2}}=
    \frac{1}{c}
    \lr{
    \dd{s}{t}
    }、
    \dd{s}{t}=
    \sqrt{
    \eta_{\mu\nu}
    \dd{x^\mu}{t}
    \dd{x^\nu}{t}}
    \rightarrow
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
$$

と置き換えて、改めて運動方程式を記述すると $\dot{s}=\sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}、q=x^\lambda$ として

$$
    \pp{\mathcal{L}}
    {\dot{x}^\lambda}=
    -m_0c
    \pp{}
    {\dot{x}^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}=
    -\frac{m_0c}{2\dot{s}}
    (g_{\lambda\mu}\dot{x}^{\nu}+
    g_{\lambda\mu}\dot{x}^{\mu})=
    -m_0c
    \lr{
    g_{\lambda\mu}
    \dd{x^{\mu}}
    {s}
    }
$$
$$
    \pp{\mathcal{L}}
    {x^\lambda}=
    -m_0c
    \pp{}
    {x^\lambda}
    \sqrt{
    g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}-
    \pp{U}{x^\lambda}=
    -\frac{m_0c\dot{s}}{2}
    \lr{
        \pp{g_{\mu\nu}}
        {x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }-
    \pp{U}{x^\lambda}
$$

となる（ここで $g_{\mu\nu}=g_{\nu\mu}$ を利用している）。
以上の結果を上記の運動方程式に代入すると以下のような形になる。

$$
    m_0c\dot{s}
    \LR{
    \dd{g_{\lambda\mu}}
    {s}
    \dd{x^{\mu}}
    {s}+
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}-
    \frac{1}{2}
    \lr{
        \pp{g_{\mu\nu}}
        {x^\lambda}
        \dd{x^{\mu}}
        {s}
        \dd{x^{\nu}}
        {s}
    }}-
    \pp{U}{x^\lambda}=0
$$

ここで、計量に関しての微分が

$$
    \dd{g_{\lambda\mu}}
    {s}=
    \pp{g_{\lambda\mu}}
    {x^\nu}
    \dd{x^\nu}
    {s}
$$

であるため、これを踏まえて整理すると次の通りになる。

$$
    m_0c\dot{s}
    \LR{
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
    }-
    \pp{U}{x^\lambda}=0
$$

仮に外部からの影響がなく（ $U=0$ ）、 $\dot{s}\neq 0$ であることを踏まえると、

$$
    g_{\lambda\mu}
    \dd{^2x^{\mu}}
    {s^2}+
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

となるわけだが、ここで以下のように変形する。

$$
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}-
        \frac{1}{2}
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=
    \frac{1}{2}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}
$$

そして、計量の微分を展開してみると

$$
    \pp{g_{\lambda\mu}}
    {x^\nu}=
    \pp{}{x^\nu}
    (\bm{b}_\lambda\cdot\bm{b}_\mu)=
    \pp{\bm{b}_\lambda}
    {x^\nu}\cdot\bm{b}_\mu+
    \bm{b}_\lambda\cdot
    \pp{\bm{b}_\mu}
    {x^\nu}
$$

であり、ここで**第１種クリストフェル記号**を

$$
    \Gamma_{\nu\lambda,\mu}=
    \pp{\bm{b}_\lambda}
    {x^\nu}\cdot\bm{b}_\mu=
    \bm{b}_\mu\cdot
    \pp{\bm{b}_\lambda}
    {x^\nu}
$$

というように定義することで、

$$
    \pp{g_{\lambda\mu}}
    {x^\nu}=
    \Gamma_{\nu\lambda,\mu}+
    \Gamma_{\nu\mu,\lambda}
$$

となる。同様に、その他の偏微分についても

$$
    \pp{g_{\lambda\nu}}
    {x^\mu}=
    \Gamma_{\mu\lambda,\nu}+
    \Gamma_{\mu\nu,\lambda}、
    \pp{g_{\mu\nu}}
    {x^\lambda}=
    \Gamma_{\lambda\mu,\nu}+
    \Gamma_{\lambda\nu,\mu}
$$

となるため、以下のような関係が成り立つことが分かる。

$$
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
$$

そして、元の式に $g^{k\lambda}$ をかけることにより以下の形が得られる。

$$
    \dd{^2x^k}
    {s^2}+
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

これは**第２種クリストッフェル記号**を用いて

$$
    \Gamma^{k}_{\mu\nu}=
    g^{k\lambda}
    \Gamma_{\mu\nu,\lambda}=
    \frac{1}{2}g^{k\lambda}
    \lr{
        \pp{g_{\lambda\mu}}
        {x^\nu}+
        \pp{g_{\lambda\nu}}
        {x^\mu}-
        \pp{g_{\mu\nu}}
        {x^\lambda}
    }
$$

により、次の**測地線方程式**の形で記載される。

$$
    \dd{^2x^k}
    {s^2}+
    \Gamma^{k}_{\mu\nu}
    \dd{x^{\mu}}{s}
    \dd{x^{\nu}}{s}=0
$$

この式は物体がRiemann空間内を最短距離で通るということを前提にして求められるもので、例として点Aから点Bへ物体が移動するものとすると

$$
    s=\int_A^B\mathrm{d}s=
    \int_A^B
    \dd{s}{t}
    \mathrm{d}t=
    \int_A^B
    \sqrt{g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}
    \mathrm{d}t
$$

が最小となる（$\delta s=0$）ときの関係式からも確認できる。特殊相対性理論においては、$g_{\mu\nu}=\eta_{\mu\nu}$（Lorentz変換）とするとクリストッフェル記号は0となり

$$
    \dd{^2x^k}
    {s^2}=0、
    \dd{s}{t}=
    \sqrt{
        \eta_{\mu\nu}
        \dot{x}^{\mu} \dot{x}^{\nu}
    }=
    \sqrt{c^2-\bm{v}^2}
$$

となるが、ここで $s$ の時間微分に関して**固有時** $\tau$ を

$$
    \mathrm{d}\tau=
    \frac{\dot{s}}{c}\mathrm{d}t=
    \dd{s}{c}=
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
    \mathrm{d}t
$$

とおくと、先程測地線方程式に $m_0c\dot{s}$ がかかっていたことを踏まえて

$$
    m_0c\dot{s}
    \dd{^2x^k}{s^2}=0
    \rightarrow
    \dd{p^k}{\tau}=0、
    \lr{
        p^k=
        m_0
        \dd{x^k}
        {\tau}
    }
$$

というように、相対論的力学で登場した運動方程式で力を0とした式が求められることが分かる。ここでの  $p^k$ は4元運動量呼ばれており、右辺に力がある場合には $f^k$ （4元力）となる。このように、今までは速度に応じて質量が変化するものと思われてきたが、実は時間の進み方が変化していたことが分かる。


測地線方程式において、第二項目を右辺に移項し両辺に $m_0c$ をかけると $p^k=m_0cv^k$ であるため

$$
    \dd{p^k}
    {\tau}=
    -\frac{1}{m_0c}\Gamma^{k}_{\mu\nu}
    p^{\mu}p^{\nu}
$$

となるが、ここで右辺が慣性力によるものになると思われる。そこで、まずは簡単に地球上の重力を考慮して

$$
    \dd{p^3}
    {t}=
    -\frac{Gm_0M_0}{(x^3+R_0)^2}
$$