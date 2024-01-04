
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
    \braket{H}=
    -
    \left(
        \frac{\partial}
        {\partial\beta}
        \ln Y
    \right)_{P}
$$
一方で、エントロピーに関して
$$
    \braket{S}=
    k_{\mathrm{B}}
    \braket{\ln\mathcal{W}}=
    k_{\mathrm{B}}
    \left(
        \braket{\ln f}+
        \ln Y
    \right)+
    \frac{\braket{H}}{T}    
$$
であることから、最終的に以下の通りになる。
$$
    \braket{G}=
    -\frac{1}{\beta}
    \left(
        \braket{\ln f}+
        \ln Y
    \right)、
    \braket{S}=
    k_{\mathrm{B}}
    \braket{\ln f}+
    \left[
    \frac{\partial}{\partial T}
    \left(
    \frac{1}{\beta}\ln Y
    \right)
    \right]_P
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
    \int_{0}^{V_t}
    (\beta Z)e^{-\beta PV}\mathrm{d}V、
    \beta Z=
    \int_{0}^{\infty}
    \mathcal{D}(U,V)
    e^{-\beta U}\mathrm{d}U
$$

理想気体での分配関数を求めてみると、$V_t\to\infty\ (x_t\to\infty)$ として
$$
    Y=
    \frac{C}{(\beta P)^N}
    \left(
        \frac{2\pi}{m\beta}
    \right)^{3N/2}
    \int_0^{x_t}
    x^{N}e^{-x}
    \mathrm{d}x=
    \frac{C}{(\beta P)^N}
    \left(
        \frac{2\pi}{m\beta}
    \right)^{3N/2}N!
$$
となるので、各期待値は次の形で得られる。
$$
    \braket{V}=
    \frac{Nk_{\mathrm{B}}T}{P}、
    \braket{H}=
    \frac{5}{2}Nk_{\mathrm{B}}T=
    \braket{U}+P\braket{V}
$$




