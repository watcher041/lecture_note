
## 大正準集団

　前回までは等温定圧集団まで扱ったが，それに加えて粒子数も変化することを考える。しかし、これを考えた時には、エントロピーの近似式が
$$
    S(U_t-U,V_t-V,N_t-N)=
    S(U_t,V_t,N_t)-
    \left(
    \frac{U+PV-\mu N}{T}
    \right)
$$
$$
    U=TS-PV+\mu N
$$
となるため、全体の状態数と熱浴の状態数が同じものとなってしまうことが分かる（完全に開放した状態になるため、完全に同化したともいえる）。ただ、実際のところ等温低圧集団よりも正準集団の方が計算量が少なくほぼ同じ結果が導けていたので、正準集団において粒子数が変化する集団を考えることにする。このときは、
$$
    S(U_t-U,N_t-N)=
    S(U_t,N_t)-
    \left(
    \frac{U-\mu N}{T}
    \right)
$$
であることから、分布関数は以下の通りになる（$J:グランドポテンシャル$）。
$$
    f(U,N)=
    \frac{1}{\Xi}
    \mathcal{W}(U,N)e^{-\beta(U-\mu N)}=
    \frac{1}{\Xi}
    e^{-\beta J}
$$
$$
    J=
    U-TS-\mu N=-PV、
    \Xi=
    \sum_{U,N}
    \mathcal{W}(U,N)e^{-\beta(U-\mu N)}
$$
グランドポテンシャルの微小変化は
$$
    \mathrm{d}J=
    -P\mathrm{d}V-
    S\mathrm{d}T-
    N\mathrm{d}\mu
$$
であることから、
$$
    \left(
        \frac{\partial J}
        {\partial V}
    \right)_{T,\mu}=
    -P、
    \left(
        \frac{\partial J}
        {\partial T}
    \right)_{V,\mu}=
    -S、
    \left(
        \frac{\partial J}
        {\partial \mu}
    \right)_{V,T}=
    -N
$$
が成り立つため、各気体値は以下のように書ける。
$$
    \braket{P}=
    -\frac{1}{\beta}
    \left(
        \frac{\partial}{\partial V}
        \ln\Xi
    \right)_{T,\mu}、
    \braket{N}=
    -\frac{1}{\beta}
    \left(
        \frac{\partial}{\partial \mu}
        \ln\Xi
    \right)_{V,T}
$$
$$
    \braket{S}=
    -\frac{\braket{J}}{T}
    +\frac{1}{\beta}
    \left(
        \frac{\partial}{\partial T}
        \ln\Xi
    \right)_{V,\mu}=
    -\frac{\braket{J}}{T}+
    \frac{1}{T}
    (\braket{U}-\mu\braket{N})
$$
これを連続的な形で記載した場合には、
$$
    \rho=
    \frac{1}{\Xi}
    e^{-\beta(\mathcal{H}-\mu N)}、
    \Xi=
    \sum_{N=0}^{N_t} Ze^{\beta\mu N}
$$
というようになることに踏まえて、
$$
    \braket{\mathcal{H}}-
    \mu\braket{N}=
    -\frac{1}{\beta}\braket{\ln\rho}-
    \frac{1}{\beta}\ln\Xi
$$
であるため、以下の関係が成り立つことが予想される。
$$
    \braket{S}=
    -k_{\mathrm{B}}\braket{\ln\rho}、
    \braket{J}=
    \frac{1}{\beta}\ln\Xi
$$
実際、小正準集団とみなした場合には、
$$
    \braket{S}=
    k_{\mathrm{B}}\ln\mathcal{W}(U,N)、
    \braket{J}=J(U,N)
$$
となる。さらに、自由粒子の場合で解いてみると、