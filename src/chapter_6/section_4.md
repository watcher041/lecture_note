
## 等温定圧集団・大正準集団

　ここまでは体積が一定の場合を考えていたが、実際の物体は圧力が外部と同じになることが多い。そのため、ここでは温度と圧力が変化する状況でどうなるかを見てみることにする。熱平衡になった場合
$$
    S(U_t-U,V_t-V)=
    S(U_t,V_t)-
    \left(
        \frac{\partial S}{\partial U}
    \right)U-
    \left(
        \frac{\partial S}{\partial V}
    \right)V=
    S(U_t,V_t)-
    \left(
    \frac{U+PV}{T}
    \right)
$$
であるから、状態数としては以下の通りになる。
$$
    \mathcal{W}_t(U_t,V_t)=
    \sum_{U,V}
    \mathcal{W}(U,V)
    \mathcal{W}_{b}(U_t-U,V_t-V)
$$
$$
    1=\sum_{U,V}f(U,V)、
    f(U,V)=
    \frac{\mathcal{W}(U,V)
    \mathcal{W}_{b}(Ut-U,V_t-V)}
    {\mathcal{W}_t(U_t,V_t)}
$$
$$
    f(U,V)=
    \frac{\mathcal{W}_b(U_t,V_t)}
    {\mathcal{W}_t(U_t,V_t)}
    \mathcal{W}(U,V)
    e^{-\beta (U+PV)}、
    \beta=\frac{1}{k_{\mathrm{B}}T}
$$
ここで分配関数のように**エンタルピー** $H$ を用いて
$$
    Y =
    \frac{\mathcal{W}_t(U_t,V_t)}
    {\mathcal{W}_b(U_t,V_t)}=
    \sum_{U,V}
    \mathcal{W}(U,V)
    e^{-\beta H}=、
    H=U+PV
$$
とすることで、以下の通りにかける。
$$
    f(U,V)=
    \frac{1}{Y}
    \mathcal{W}(U,V)
    e^{-\beta H}=
    \frac{1}{Y}e^{-\beta G}、
    G=H-TS
$$
また、**ギブスの自由エネルギー** $G$ の微小変化をとると
$$
    \mathrm{d}G=
    \mathrm{d}F+
    \mathrm{d}PV+P\mathrm{d}V=
    -S\mathrm{d}T+V\mathrm{d}P
$$
であることから、以下の関係が成り立つ。
$$
    S=-
    \left(
        \frac{\partial G}
        {\partial T}
    \right)_{P}、
    V=
    \left(
        \frac{\partial G}
        {\partial P}
    \right)_{T}、
    F=-P^2
    \left[
        \frac{\partial}
        {\partial P}
        \left(
            \frac{G}{P}
        \right)
    \right]_{T}
$$
そのため、期待値は以下の通りにかける。
$$
    \braket{S}=
    -\frac{1}{T}
    \left(
        \frac{\partial}
        {\partial\beta}
        \ln Y
    \right)_{P}-
    \frac{\braket{G}}{T}
$$
$$
    \braket{V}=
    -\frac{1}{\beta}
    \left(
        \frac{\partial}
        {\partial P}
        \ln Y
    \right)_{T}、

$$

そして、これが連続している場合には正準集団のところ無次元化係数が影響しないことをふまえると、以下のように書くこともできる。
$$
    f(U,V)=
    \frac{\beta P}{Y}
    \mathcal{D}(U,V)
    e^{-\beta (U+PV)}
$$
$$
    \frac{Y}{\beta P}=
    \int_{0}^{\infty}
    (\beta Z)e^{-\beta PV}\mathrm{d}V、
    \beta Z=
    \int_{0}^{\infty}
    \mathcal{D}(U,V)
    e^{-\beta U}\mathrm{d}U
$$











　前回の熱平衡に続いて、今度は粒子数も変化するような系を考える。ただ、このときに粒子数の変化に対応した項が熱力学第１法則に含まれていないため、H$_2$ や O$_2$ といった化学的性質によるエネルギーとして**化学ポテンシャル** $\mu$ を導入して
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W+
    \mu\mathrm{d}N
$$
とする（一つの物質のみ存在する場合）。このようにすると、粒子数の変化があった場合も取り扱うことが可能になる。化学ポテンシャルの形は、小正準集団の場合だと
$$
    \mathrm{d}N=0、
    \mu=-T\left(
        \frac{\partial S}
        {\partial N}
    \right)_{S,V}
$$
として求まるわけだが、ここで $N$ は定数としていた係数にも含まれているため、その部分に関しても細かく議論していく必要がある。

　より厳密に多粒子系は取り扱う際は解析力学が用いられる。特にエネルギー $U$ もハミルトニアン $\mathcal{H}$ が用いられ、例として $N$ 個の粒子がある場合は $i$ 番目の粒子の一成分の位置と運動量を $q_i,p_i\ (i=1,\cdots,3N)$ とすると
$$
    \mathcal{H}
    (q_1,\cdots,q_{3N},p_1,
    \cdots,p_{3N})
$$
というように $6N$ の変数を持つ関数になる。これら $q.p$ の組（共役変数）が存在する空間のことを**位相空間**と呼ぶ。例えば、自由粒子の場合だとハミルトニアンが
$$
    \mathcal{H}=
    \sum_{i=1}^{3N}
    \frac{p_i^2}{2m}=
    U(p_1,\cdots,p_{3N})
$$
の場合は、$p_1,\cdots,p_{3N}$ のみ依存している。より簡単には粒子が一つで1次元だと $q_1,p_1$ しかないため
$$
    \mathcal{H}=\frac{p_1^2}{2m}=U(p_1)
$$
となる。小正準集団とみなした場合はエネルギーが一定になるということだったので、
$$
    p_1^2=2m U
$$
として、これを満たす $q_1,p_1$ の状態数（区合わせの数）を数えていた。例えば、粒子が長さLの1次元の箱の中にあるものとすると、
$$
    \mathcal{W}=\frac{2L}{h}
$$
である。同じように次元を増やしていくことによって、$3N$ 次元になった場合は
$$
    \mathcal{W}=
    \frac{V^{N}}{h^{3N}}
    \frac{\pi^{3N/2}}{\Gamma(3N/2)}
    \left(2mU\right)^{3N/2-1}、
    V=L^3
$$
というようになる。ここで、エントロピーが示量量であることを踏まえるとこれだけでは不十分で、同じ状態を $N!$ だけあることを考慮して最終的には次の形になる。
$$
    \mathcal{W}=
    \frac{V^{N}}{N!h^{3N}}
    \frac{\pi^{3N/2}}{\Gamma(3N/2)}
    \left(2mU\right)^{3N/2-1}
$$
$$
    S=
    k_{\mathrm{B}}
    \left[
        N\ln
            \frac{V(2m\pi U)^{3/2}}
            {h^3}-\ln(2mU)
        -\ln N!-
        \ln
        \left(
            \frac{3N}{2}
        \right)!
    \right]
$$
スターリングの公式により
$$
    \ln N!\simeq
    N(\ln N-1)+
    \frac{1}{2}\ln(2\pi N)
$$
であることから、以下の形に近似できる。
$$
    S=
    k_{\mathrm{B}}N\ln
    \left[
        \frac{V}{N^{5/2}h^3}
        \left(
            \frac{4\pi m U}{3}
        \right)^{3/2}e^{5/2}
    \right]-
    k_{\mathrm{B}}\ln
    (2\sqrt{6}\pi mUN)
$$
そのため、化学ポテンシャルは以下のようになる。
$$
    \mu=
    -k_{\mathrm{B}}T\ln
    \left[
        \frac{Ve^{-\frac{1}{N}}}
        {N^{5/2}h^3}
        \left(
            2\pi m k_{\mathrm{B}}T
        \right)^{3/2}
    \right]
$$
大正準集団の場合にも、正準集団と同様な方法で取り扱うことができる。
$$
    S(U_t-U,N_t-N)=
    S(U_t,N_t)-
    \left(
        \frac{\partial S}{\partial U}
    \right)U-
    \left(
        \frac{\partial S}{\partial N}
    \right)N=
    S(U_t,S_t)-
    \left(
    \frac{U-\mu N}{T}
    \right)
$$
