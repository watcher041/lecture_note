
## 等温定圧集団

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
    \mathrm{d}H-
    \mathrm{d}TS+T\mathrm{d}S=
    -S\mathrm{d}T+V\mathrm{d}P
$$
ここで、エンタルピーの微小変化の式を利用している。
$$
    \mathrm{d}H=
    \mathrm{d}U+
    \mathrm{d}PV+P\mathrm{d}V=
    T\mathrm{d}S+V\mathrm{d}P
$$

上記の関係式から、以下の関係が成り立つ。
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
    H=-T^2
    \left[
        \frac{\partial}
        {\partial T}
        \left(
            \frac{G}{T}
        \right)
    \right]_{P}
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
    \frac{\braket{G}}{T}=
    \frac{1}{T}
    (\braket{H}-\braket{G})
$$
$$
    \braket{V}=
    -\frac{1}{\beta}
    \left(
        \frac{\partial}
        {\partial P}
        \ln Y
    \right)_{T}、
    \braket{H}=
    -
    \left(
        \frac{\partial}
        {\partial\beta}
        \ln Y
    \right)_{P}=
    \braket{U}+P\braket{V}
$$
そして、これが連続している場合には正準集団のところ無次元化係数が影響しないことをふまえると、以下のように書くこともできる。
$$
    \rho_Y=
    \frac{1}{Y}
    e^{-\beta (\mathcal{H}+PV)}、
    Y=
    \frac{1}{V_t}
    \int_{0}^{V_t}
    Ze^{-\beta PV}\mathrm{d}V、
$$
このうち、$\rho_Y$ からエンタルピーの期待値を求めると
$$
    \braket{\mathcal{H}+PV}=
    -\frac{1}{\beta}\braket{\ln \rho_Y}-
    \frac{1}{\beta}\ln Y
    \leftrightarrow
    \braket{H}=
    T\braket{S}+\braket{G}
$$
であるから、以下の関係になっていることが予想される（小正準集団においたときも成り立つ）。
$$
    \braket{S}=
    -k_{\mathrm{B}}\braket{\ln\rho_Y}、
    \braket{G}=
    -\frac{1}{\beta}\ln Y
$$
理想気体での分配関数を求めてみると
$$
    Y=
    \frac{1}{h^{3N}}
    \left(
        \frac{2m\pi}{\beta}
    \right)^{3N/2}
    \frac{1}{V_t}
    \int_{0}^{V_t}
    V^{N}e^{-\beta PV}\mathrm{d}V
$$
であるが、$V_t$ が十分大きいとして $V_t\to\infty$ とすると
$$
    \lim_{V_t\to\infty}
    \frac{1}{V_t}
    \int_{0}^{V_t}
    V^{N}e^{-\beta PV}\mathrm{d}V=
    \frac{N!}{(\beta P)^{N}}
$$
であるため、以下の通りになる。
$$
    Y=
    \frac{(2m\pi)^{3N/2}}{h^{3N}}
    \frac{N!}{\beta^{5N/2}P^{N}}
$$
となるので、各期待値は次の形で得られる。
$$
    \braket{V}=
    \frac{Nk_{\mathrm{B}}T}{P}、
    \braket{H}=
    \frac{5}{2}Nk_{\mathrm{B}}T、
    \braket{U}=
    \braket{H}-P\braket{V}=
    \frac{3}{2}Nk_{\mathrm{B}}T
$$
$$
    \braket{G}=
    -\frac{N}{\beta}
    \ln
    \frac{(2\pi m)^{3/2}}
    {h^3\beta^{5/2}P}
    -\frac{1}{\beta}
    \ln N!
$$
$$
    \braket{S}=
    Nk_{\mathrm{B}}
    \left[
        \frac{5}{2}+
        \ln
        \frac{(2\pi m)^{3/2}}
        {h^3\beta^{5/2}P}
    \right]+
    k_{\mathrm{B}}\ln N!
$$
さらに、これからヘルムホルツの自由エネルギーも求めてみると
$$
    \braket{F}=\braket{U}-T\braket{S}=
    -\frac{N}{\beta}
    \ln
    \frac{\braket{V}}{h^3}
    \left(
            \frac{2\pi m}{\beta}
    \right)^{3/2}-
    k_{\mathrm{B}}T
    \left(
        N-
        N\ln N+
        \ln N!
    \right)
$$
というように、前回の形と同様な形が出てくるが後半に余計な項がついてくることが分かる。これについては、分配関数を $N!$ で割る（組み合わせの重複分を消す）ことで解消できる。実際、
$$
    Z\rightarrow\frac{Z}{N!}
$$ 
とおくと、まず正準集団における分配関数は
$$
    Z=\frac{V^N}{N!h^{3N}}
    \left(
        \frac{2m\pi}{\beta}
    \right)^{3N/2}
$$
となるため、ヘルムホルツの自由エネルギーとエントロピーは以下の通りになる。
$$
    \braket{F}=
    -\frac{N}{\beta}
    \ln
    \left[
        \frac{V}{h^{3}}
        \left(
           \frac{2m\pi}{\beta}
        \right)^{3/2}
    \right]+
    \frac{1}{\beta}\ln N!
$$
$$
    \braket{S}=
    \frac{1}{T}
    (\braket{U}-\braket{F})=
    Nk_{\mathrm{B}}
    \left\{
        \frac{3}{2}+
        \ln
        \left[
            \frac{V}{h^{3}}
            \left(
            \frac{2m\pi}{\beta}
            \right)^{3/2}
        \right]
    \right\}-
    k_{\mathrm{B}}\ln N!
$$
一方で、等温定圧集団においては分配関数が
$$
    Y=
    \frac{(2m\pi)^{3N/2}}{h^{3N}}
    \frac{1}{\beta^{5N/2}P^{N}}
$$
であるから、ヘルムホルツの自由エネルギーとエントロピーは以下の通りになる。
$$
    \braket{F}=\braket{U}-T\braket{S}=
    -\frac{N}{\beta}
    \ln
    \frac{\braket{V}}{h^3}
    \left(
            \frac{2\pi m}{\beta}
    \right)^{3/2}-
    \frac{1}{\beta}
    \left(
        N-
        N\ln N
    \right)
$$
$$
    \braket{S}=
    Nk_{\mathrm{B}}
    \left\{
        \frac{3}{2}+
        \ln
        \left[
            \frac{V}{h^{3}}
            \left(
            \frac{2m\pi}{\beta}
            \right)^{3/2}
        \right]
    \right\}+
    k_{\mathrm{B}}
    \left(
        N-
        N\ln N
    \right)
$$
$$
    \braket{G}=
    \braket{H}-T\braket{S}=
    -\frac{N}{\beta}
    \ln
    \frac{(2\pi m)^{3/2}}
    {h^3\beta^{5/2}P}
$$

これらを比較すると、以下の関係が成り立てば互いに等しい関係になっていることが分かる。
$$
    \ln N!=N\ln N-N
$$
実は、この関係は**Stirlingの公式**と呼ばれており、近似的にこの関係が成り立つことが知られている。