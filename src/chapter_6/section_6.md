
## 大正準集団

　前回までは等温定圧集団まで扱ったが，それに加えて粒子数も変化することを考える。しかし、これを考えた時には、エントロピーの近似式が
$$
    S(U_t-U,V_t-V,N_t-N)=
    S(U_t,V_t,N_t)-
    \lr{
    \frac{U+PV-\mu N}{T}
    }
$$
$$
    U=TS-PV+\mu N
$$
となるため、全体の状態数と熱浴の状態数が同じものとなってしまうことが分かる（完全に開放した状態になるため、完全に同化したともいえる）。ただ、実際のところ等温低圧集団よりも正準集団の方が計算量が少なくほぼ同じ結果が導けていたので、正準集団において粒子数が変化する集団を考えることにする。このときは、
$$
    S(U_t-U,N_t-N)=
    S(U_t,N_t)-
    \lr{
    \frac{U-\mu N}{T}
    }
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
    \lr{
        \pp{ J}
        { V}
    }_{T,\mu}=
    -P、
    \lr{
        \pp{ J}
        { T}
    }_{V,\mu}=
    -S、
    \lr{
        \pp{ J}
        { \mu}
    }_{V,T}=
    -N
$$
が成り立つため、各気体値は以下のように書ける。
$$
    \braket{P}=
    \frac{1}{\beta}
    \lr{
        \pp{}{ V}
        \ln\Xi
    }_{T,\mu}、
    \braket{N}=
    \frac{1}{\beta}
    \lr{
        \pp{}{ \mu}
        \ln\Xi
    }_{V,T}
$$
$$
    \braket{S}=
    -\frac{\braket{J}}{T}
    +\frac{1}{\beta}
    \lr{
        \pp{}{ T}
        \ln\Xi
    }_{V,\mu}=
    k_{\mathrm{B}}
    \lr{
        \pp{}{ T}
        T\ln\Xi
    }_{V,\mu}
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
    -\frac{1}{\beta}\ln\Xi
$$
実際、小正準集団とみなした場合には、
$$
    \braket{S}=
    k_{\mathrm{B}}\ln\mathcal{W}(U,N)、
    \braket{J}=J(U,N)
$$
となる。さらに、自由粒子の場合で解いてみると、
$$
    \Xi=
    \sum_{N=0}^{N_t}
    \frac{V^N}{N!h^{3N}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3N/2}e^{\beta\mu N}=
    \sum_{N=0}^{N_t}
    \frac{1}{N!}
    \LR{
        \frac{V}{h^{3}}
        \lr{
            \frac{2m\pi}{\beta}
        }^{3/2}e^{\beta \mu}
    }^{N}
$$
となるため、総和に関して
$$
    \sum_{N=0}^{\infty}
    \frac{x^{N}}{N!}=e^{x}
$$
であることを利用して、$N_t\rightarrow \infty$ とすると
$$
    \Xi=
    \exp
    \LR{
        \frac{V}{h^{3}}
        \lr{
            \frac{2m\pi}{\beta}
        }^{3/2}
        e^{\beta \mu}
    }、
    \ln\Xi=
    \frac{V}{h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}
$$
となるため、各期待値は以下の通りになる。
$$
    \braket{P}=
    \frac{1}{\beta h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}、
    \braket{N}=
    \frac{V}{h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}、
    \braket{J}=
    -\frac{V}{\beta h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}
$$
$$
    \braket{S}=
    k_{\mathrm{B}}
    \frac{V}{h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}
    \lr{
        \frac{5}{2}-\beta\mu
    }
$$
$$
    \braket{U}=
    T\braket{S}-\braket{P}V+
    \mu\braket{N}=
    \frac{3}{2}
    k_{\mathrm{B}}T
    \frac{V}{h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}
$$
あまりにも見にくいので、改めて整理すると以下のようになる。
$$
    \braket{N}=
    \frac{V}{h^{3}}
    \lr{
        \frac{2m\pi}{\beta}
    }^{3/2}
    e^{\beta \mu}、
    \mu=
    -\frac{1}{\beta}
    \ln
    \LR{
        \frac{V}{\braket{N}h^{3}}
        \lr{
            \frac{2m\pi}{\beta}
        }^{3/2}
    }
$$
$$
    \braket{P}=
    \frac{\braket{N}}{\beta V}、
    \braket{J}=-\braket{P}V、
    \braket{U}=
    \frac{3}{2}
    \braket{N}k_{\mathrm{B}}T
$$
$$
    \braket{S}=
    \braket{N}k_{\mathrm{B}}
    \lr{
        \frac{5}{2}-\beta\mu
    }=
    \braket{N}k_{\mathrm{B}}
    \ln
    \LR{
        \frac{V}{\braket{N}h^{3}}
        \lr{
            \frac{2m\pi}{\beta}
        }^{3/2}
        e^{5/2}
    }
$$
このように、従来の結果と同じ結果が得られることが分かる。