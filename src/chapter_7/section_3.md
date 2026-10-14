
## 相対論的力学

前回までのことをふまえて、改めてLorentz変換を用いて質点の運動がどうなるかを見ていくことにしよう。まず、K' 系においての速度は

$$
    v_x'=
    \frac{{\mathrm d}x'}{{\mathrm d}t'}、
    v_y'=
    \frac{{\mathrm d}y'}{{\mathrm d}t'}、
    v_z'=
    \frac{{\mathrm d}z'}{{\mathrm d}t'}、
    v_w'=
    \frac{{\mathrm d}w'}{{\mathrm d}t'}、
    (w'=ct')
$$

となり、 K 系においての速度は

$$
    v_x=
    \frac{{\mathrm d}x}{{\mathrm d}t}、
    v_y=
    \frac{{\mathrm d}y}{{\mathrm d}t}、
    v_z=
    \frac{{\mathrm d}z}{{\mathrm d}t}、
    v_w=
    \frac{{\mathrm d}w}{{\mathrm d}t}、
     (w=ct)
$$

とする。ここで、K' の速度はLorentz変換

$$
    x'=\gamma(x-\beta w)、y'=y、z'=z、
    w'=\gamma\lr{w-\beta x}、
    \lr{
        \beta=\frac{V}{c}、
        \gamma=\frac{1}{\sqrt{1-\beta^2}}
    }
$$

を $t$ で微分することで得られる

$$
    \frac{{\mathrm d}x'}{{\mathrm d}t}=
    \gamma(v_x-V)、
    \frac{{\mathrm d}y'}{{\mathrm d}t}=v_y、
    \frac{{\mathrm d}z'}{{\mathrm d}t}=v_z、
$$
$$
    \frac{{\mathrm d}w'}{{\mathrm d}t}=
    \gamma\lr{c-\beta v_x}
    \rightarrow
    \frac{{\mathrm d}t'}{{\mathrm d}t}=
    \gamma\lr{1-\frac{v_xV}{c^2}}
$$

を利用して以下の通りに変換される。

$$
    v_x'=\frac{v_x-V}{1-\frac{v_xV}{c^2}}、
    v_y'=\frac{v_y}{
    \gamma\lr{1-\frac{v_xV}{c^2}}}、
    v_z'=\frac{v_z}{
    \gamma\lr{1-\frac{v_xV}{c^2}}}、
    v_w'=c
$$

ここで $v_x'$ に着目すると分母（それ以外にも同じ項目が時間の影響で出てきている）が

$$
    1-\frac{v_xV}{c^2}=0
$$

であれば発散することになるが、ここで両辺に $V$ をかけてみると

$$
    V=\frac{V^2}{c^2}v_x=\beta^2 v_x
$$

となる。この式は、前回のLorentz収縮のところで出てきた

$$
    V\Delta t=\beta^2 \Delta x
$$

において二つの地点の位置関係が微小で微小時間で考えたときに

$$
    V{\mathrm d}t=\beta^2{\mathrm d}x
    \rightarrow
    V=\beta^2\frac{{\mathrm d}x}{{\mathrm d}t}=
    \beta^2v_x
$$

というようになるため、K' 系で質点が同時に二つの地点にいることになり矛盾する。もう一つ、時間の変換式において右辺が負の値になると**因果律（原因が結果より先に起こること）が成り立つ前提であれば**時間が逆行してしまうことになるため矛盾するため、右辺については正の値になる必要がある。

$$
    1-\frac{v_xV}{c^2}>0
    \rightarrow
    1>\frac{v_xV}{c^2}
$$

そして $\gamma$ が虚数とならない条件として $V<c$ となることから $v_x\leq c$ である（観測対象に光も含まれるため）ものと思われる。実際、$v_x\leq c$ としたときに両辺に $V/c^2$ をかけることで

$$
    \frac{v_xV}{c^2}\leq\frac{V}{c}<1
$$

というように $V$ によらず満たしていることが分かる。これが逆に 
$c< v_x$ の場合だと、$c^2/v_x< c$ であるから、

$$
    \frac{c^2}{v_x}​<V<c 
$$

を満たす $V$ を選ぶことができる（この範囲は $0\le V<c$ の中に必ず存在する）ため、両辺に $v_x​(>0)$ をかけることで $v_xV​>c^2$、すなわち $v_xV​/c^2>1$ というように矛盾してしまうことが分かる。また、$v_x<-c$ になる場合も考えられるが、
こちらも $-c<c^2/v_x$ であるから、

$$
    -c<​V<\frac{c^2}{v_x}​
$$

を満たす $V$ を選ぶことができる（この範囲は $-c< V<0$ の中に必ず存在する、$V$ の値が負でも絶対値が $c$ 未満なら問題ない）ため、こちらも両辺に $v_x​(<0)$ をかけることで $v_xV​>c^2$、すなわち $v_xV​/c^2>1$ というように矛盾してしまうことが分かる。

このことから、物体の速度というのは光速を超えることがなく、力が働いて加速しても光速で頭打ちになることがうかがえる。これは別の見方だと、速度が増すことで加速しにくくなる（質量が増す）ことになるため、質量が速度に依存しているともいえる。古典力学においても質量が速度（というより時間）に依存している場合は以下の方程式を解くことで運動を記述することができた。ここで $\bm{p}$ は運動量、$\bm{F}$ は外部からの力である。また、それに加えて $w$ 成分の運動量、力をそれぞれ $p_w,F_w$ としている。

$$
    \bm{F}=\frac{{\rm d}\bm{p}}{{\rm d}t}、
    \bm{p}=m_r\bm{v}、
    F_w=\frac{{\rm d}p_w}{{\rm d}t}、
    p_w=m_rv_w
$$

今回もこれと同様の式が成立しているものとして、質量がどのように速度に依存しているか確認してみることにする。これについてはすでに G.N.Lewis と R.C.Tolman の論文（The Principle of Relativity and Non-Newtonian Mechanics）において示されており、これでは外部の力がない状態において運動量が保存されることを利用して導いている。これによると

$$
    m_r=\frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

というようになるとされている。ここで $m_0$ は物体が静止しているときの質量としている。これを踏まえた上で、相対性原理をもとに各観測者間で運動がどのように記述されるかみていくことにしよう。まず、K' 系において $\bm{p}'$ を運動量、$\bm{F}'$ を外部からの力、$w'$ 成分の運動量と力をそれぞれ $p_w',F_w'$ とすると、運動方程式は以下の通りとなる。

$$
    \bm{F}'=\frac{{\rm d}\bm{p}'}{{\rm d}t'}、
    \bm{p}'=m_r'\bm{v}'、
    F_w'=\frac{{\rm d}p_w'}{{\rm d}t'}、
    p_w'=m_r'v_w'、
    m_r'=
    \frac{m_0}{\sqrt{1-\frac{\bm{v'}^2}{c^2}}}
$$

一方で、K 系において $\bm{p}$ を運動量、$\bm{F}$ を外部からの力、$w$ 成分の運動量と力をそれぞれ $p_w,F_w$ とすると、運動方程式は以下の通りとなる。

$$
    \bm{F}=\frac{{\rm d}\bm{p}}{{\rm d}t}、
    \bm{p}=m_r\bm{v}、
    F_w=\frac{{\rm d}p_w}{{\rm d}t}、
    p_w=m_rv_w、
    m_r=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

これらのことを踏まえて、まず質量については速度の二乗について

$$
    1-\frac{\bm{v}'^2}{c^2}=
    \frac{1}{
        \lr{
            c-\frac{v_xV}{c}
        }^2
    }
    \LR{
        \lr{
            c-\frac{v_xV}{c}
        }^2-
        (v_x-V)^2-
        \lr{
            1-\frac{V^2}{c^2}
        }
        (v_y^2+v_z^2)
    }=
    \frac{
        \lr{
            1-\frac{\bm{v}^2}{c^2}
        }
    }{
        \gamma^2\lr{
            1-\frac{v_xV}{c^2}
        }^2
    }
$$

となることから質量は以下のようになる。

$$
    m_r'=
    \gamma
    \lr{
        1-\frac{v_xV}{c^2}
    }
    \frac{m_0}{
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
    }=
    \gamma\lr{
        1-\frac{v_xV}{c^2}
    } m_r=
    \dd{t'}{t}m_r
$$

このことから、運動量についても

$$
    p_x'=m_r'v_x'=
    \dd{t'}{t}m_r
    \lr{
        \frac{v_x-V}{1-\frac{v_xV}{c^2}}
    }=
    \gamma(m_rv_x-m_rV)=
    \gamma(p_x-\beta p_w)
$$
$$
    p_y'=m_r'v_y'=
    \dd{t'}{t}m_r
    \LR{
        \frac{v_y}{\gamma\lr{1-\frac{v_xV}{c^2}}}
    }=
    m_rv_y=
    p_y
$$
$$
    p_z'=m_r'v_z'=
    \dd{t'}{t}m_r
    \LR{
        \frac{v_z}{\gamma\lr{1-\frac{v_xV}{c^2}}}
    }=
    m_rv_z=
    p_z
$$
$$
    p_w'=m_r'v_w'=
    \dd{t'}{t}m_rc=
    \gamma(m_rc-\beta m_rv_x)=
    \gamma(p_w-\beta p_x)
$$

というようになることから、力も以下の形になる。

$$
    F_x'=
    \frac{{\mathrm d}p_x'}{{\mathrm d}t'}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \gamma
    \lr{
        \frac{{\mathrm d}p_x}{{\mathrm d}t}-
        \beta \frac{{\mathrm d}p_w}{{\mathrm d}t}
    }=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \gamma
    (F_x-\beta F_w)
$$
$$
    F_y'=
    \frac{{\mathrm d}p_y'}{{\mathrm d}t'}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \frac{{\mathrm d}p_y}{{\mathrm d}t}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    F_y
$$
$$
    F_z'=
    \frac{{\mathrm d}p_z'}{{\mathrm d}t'}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \frac{{\mathrm d}p_z}{{\mathrm d}t}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    F_z
$$
$$
    F_w'=
    \frac{{\mathrm d}p_w'}{{\mathrm d}t'}=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \gamma
    \lr{
        \frac{{\mathrm d}p_w}{{\mathrm d}t}-
        \beta \frac{{\mathrm d}p_x}{{\mathrm d}t}
    }=
    \frac{{\mathrm d}t}{{\mathrm d}t'}
    \gamma
    (F_w-\beta F_x)
$$

運動量についてはLorentz変換と同じ形で変換されているが、力については時間の微分が余計についてしまっていることが見て取れる。ただ、よく見ると力の方は力積（運動量の変化）の形であれば同じ形で変換されており、

$$
    {\mathrm d}p_x'=
    \gamma({\mathrm d}p_x-\beta {\mathrm d}p_w)、
    {\mathrm d}p_y'=
    {\mathrm d}p_y、
    {\mathrm d}p_z'=
    {\mathrm d}p_z、
    {\mathrm d}p_w'=
    \gamma({\mathrm d}p_w-\beta {\mathrm d}p_x)
$$

となっている。また、質量の関係式をもう少し展開していくと

$$
    \frac{m_0}{
    \sqrt{1-\frac{\bm{v}^2}{c^2}}}=
    \dd{t}{t'}
    \frac{m_0}{
    \sqrt{1-\frac{\bm{v'}^2}{c^2}}}
    \rightarrow
    \mathrm{d}t'
    \sqrt{1-\frac{\bm{v'}^2}{c^2}}=
    \mathrm{d}t
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
$$

というように時間に関して変換が不変な形をしていることから、

$$
    \mathrm{d}\tau'\equiv
    \mathrm{d}t'
    \sqrt{1-\frac{\bm{v}'^2}{c^2}}、
    \mathrm{d}\tau\equiv
    \mathrm{d}t
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
$$

として、運動方程式を以下のようにしてみることで解消されるものと思われる。

$$
    \bm{f}=
    \dd{\bm{p}}{\tau}、
    \bm{f}\equiv
    \frac{\bm{F}}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    f_w=
    \dd{p_w}{\tau}、
    f_w\equiv
    \frac{F_w}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

試しに力の変換式がどうなるか見てみると、

$$
    f_x'=
    \frac{{\mathrm d}p_x'}{{\mathrm d}\tau'}=
    \gamma
    \lr{
        \frac{{\mathrm d}p_x}{{\mathrm d}\tau}-
        \beta \frac{{\mathrm d}p_w}{{\mathrm d}\tau}
    }=
    \gamma
    (f_x-\beta f_w)
$$
$$
    f_y'=
    \frac{{\mathrm d}p_y'}{{\mathrm d}\tau'}=
    \frac{{\mathrm d}p_y}{{\mathrm d}\tau}=
    f_y
$$
$$
    f_z'=
    \frac{{\mathrm d}p_z'}{{\mathrm d}\tau'}=
    \frac{{\mathrm d}p_z}{{\mathrm d}\tau}=
    f_z
$$
$$
    f_w'=
    \frac{{\mathrm d}p_w'}{{\mathrm d}\tau'}=
    \gamma
    \lr{
        \frac{{\mathrm d}p_w}{{\mathrm d}\tau}-
        \beta \frac{{\mathrm d}p_x}{{\mathrm d}\tau}
    }=
    \gamma
    (f_w-\beta f_x)
$$

というように、こちらもLorentz変換に対応した形になる。そのため、運動方程式は

$$
    \bm{f}=
    \dd{\bm{p}}{\tau}、
    \bm{f}\equiv
    \frac{\bm{F}}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    f_w=
    \dd{p_w}{\tau}、
    f_w\equiv
    \frac{F_w}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    {\mathrm d}\tau=
    {\mathrm d}t\sqrt{1-\frac{\bm{v}^2}{c^2}}
$$
$$
    \bm{p}=m_r\bm{v}、
    p_w=m_rv_w、
    m_r=\frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

となるものと思われる。一方で、運動方程式に速度ベクトルの内積をとることで運動エネルギーに関する式が得られたため、試しに力と速度の内積（仕事率）を求めてみると

$$
    \bm{f}\cdot\bm{v}=
    \frac{{\rm d}}{{\rm d}\tau}
    \lr{\frac{m_0\bm{v}}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}}\cdot\bm{v}=
    \frac{m_0}{
        \lr{
            1-\frac{\bm{v}^2}{c^2}
        }^{3/2}
    }
    \lr{
        \bm{v}\cdot
        \frac{{\rm d}\bm{v}}{{\rm d}\tau}
    }=
    \frac{{\rm d}}{{\rm d}\tau}
    \lr{
        \frac{m_0c^2}
        {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    }=
    \frac{{\rm d}}{{\rm d}\tau}
    \lr{m_rc^2}
$$

となるため、運動エネルギーは以下の形になることが分かる。

$$
    m_rc^2=
    \frac{m_0c^2}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

従来の古典力学との対応を確認するため、$v$ が $c$ に比べて低速の場合を考えると

$$
    m_rc^2\simeq
    m_0c^2+\frac{1}{2}m_0\bm{v}^2+\cdots
$$

というように、既知の運動エネルギーに加えて静止エネルギー $m_0c^2$ が出てくる。そのため、質点自体が持つエネルギー $E_K$ は静止エネルギーと運動エネルギーの和で表されることになる。

$$
    E_K=m_rc^2=E_0+K、
    E_0=m_0c^2、
    K=\frac{1}{2}m_0\bm{v}^2+\cdots
$$

また、$w$ 成分の運動方程式に関しても

$$
    p_w=m_rv_w=m_rc=\frac{E_K}{c}、
    f_w=
    \dd{p_w}{\tau}=
    \frac{1}{c}
    \dd{E_K}{\tau}=
    \frac{1}{c}
    (\bm{f}\cdot\bm{v})
$$

というようにエネルギーに関する式になっていることが分かる。そのため、運動方程式を整理すると以下のようになる。

$$
    \bm{f}=
    \dd{\bm{p}}{\tau}、
    \bm{p}=m_r\bm{v}、
    \bm{f}\cdot\bm{v}=
    \dd{E_K}{\tau}、
    E_K=m_rc^2
$$

ただ、ここまでで $\mathrm{d}\tau$ については、運動方程式が相対性原理を満たすように導入しただけのものであったが、よく見ると時間の遅れの関係式そのものとなっている。質点が静止して見える座標系では $\bm{v}=0$ なので $\mathrm{d}\tau=\mathrm{d}t$ となり、$\tau$ は質点とともに動く時計が刻む時間にあたる。$\mathrm{d}\tau'=\mathrm{d}\tau$ であるから、この時間はどの観測者から見ても同じ値になる。これは**固有時**と呼ばれている。このことから、運動方程式は固有時を考慮したものとなっているわけだが、そうなると運動量に関しても

$$
    p_x=m_rv_x=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \dd{x}{t}=
    m_0u_x、
    u_x=\dd{x}{\tau}
$$
$$
    p_y=m_rv_y=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \dd{y}{t}=
    m_0u_y、
    u_y=\dd{y}{\tau}
$$
$$
    p_z=m_rv_z=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \dd{z}{t}=
    m_0u_z、
    u_z=\dd{z}{\tau}
$$
$$
    p_w=m_rv_w=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \dd{w}{t}=
    m_0u_w、
    u_w=\dd{w}{\tau}
$$

というように、速度を $t$ ではなく $\tau$ で微分した $u$ を使えば質量は $m_0$ のまま変わらず、$1/\sqrt{1-\bm{v}^2/c^2}$ は $\mathrm{d}t/\mathrm{d}\tau$ として現れるだけである。そのため、相対論的質量 $m_r$ という考え方が不要なのではないかという疑問が生じる。この点は、 L. B. Okun が論文 "The concept of mass"（Physics Today 42(6), 31–36, 1989）で論じており、相対論的質量という概念が不要であるだけでなく、質量が速度とともに増えるという誤解を生みやすいことを指摘している。そのため、以降では $m_r$ は利用せず $m_0$ を用いて述べていくことにする。それに伴い、運動方程式も以下のように表記する。

$$
    \bm{f}=
    \dd{\bm{p}}{\tau}、
    \bm{p}=\frac{m_0\bm{v}}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \bm{f}\cdot\bm{v}=
    \dd{E_K}{\tau}、
    E_K=\frac{m_0c^2}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
$$

ただし、ここで注意点として光のように光速（$|\bm{v}|=c$）で進むものの場合は、$E_K$ が発散しないで有限の値になるには $m_0=0$ でなければならない。このとき $E_K$ や $\bm{p}$ の式は $0\times\infty$ の形になり、そのままでは値が決まらないので、まず $m_0>0$ の場合に、エネルギーについては $\bm{p}$ 同士の内積をとることで

$$
    \bm{p}^2=
    \frac{m_0^2\bm{v}^2}{1-\frac{\bm{v}^2}{c^2}}
    \rightarrow
    \bm{v}^2=
    \frac{\bm{p}^2}{m_0^2+\frac{\bm{p}^2}{c^2}}
$$

というように速度の二乗が運動量で置き換えられるので、これを $E_K$ の式に代入して

$$
    E_K=
    \sqrt{(m_0c^2)^2+(|\bm{p}|c)^2}
    \rightarrow
    E_K^2=(m_0c^2)^2+(|\bm{p}|c)^2
$$

を得る。この式の右辺は $m_0=0$ でも有限の値をとり、$\bm{v}^2=c^2$ とも矛盾しない。したがって光のように $m_0=0$ の場合は、$E_K=|\bm{p}|c$ とすることでエネルギーを運動量から求められる。

以上のことを踏まえて、実際に重力がかかる場合の運動を考えてみる。重力加速度 $\bm{g}$ で重力 $m_0\bm{g}$ が働いている場合、

$$
    \dd{\bm{p}}{\tau}=
    \frac{m_0\bm{g}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}、
    \dd{E_K}{\tau}=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    (\bm{g}\cdot\bm{v})
$$

となるが、固有時に関する微分 $\mathrm{d}t/\mathrm{d}\tau$ が出てくることから以下の形になる。

$$
    \dd{t}{\tau}
    \dd{\bm{p}}{t}=
    \frac{m_0\bm{g}}
    {\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \rightarrow
    \dd{\bm{p}}{t}=
    m_0\bm{g}
$$
$$
    \dd{t}{\tau}
    \dd{E_K}{t}=
    \frac{m_0}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    (\bm{g}\cdot\bm{v})
    \rightarrow
    \dd{E_K}{t}=
    m_0(\bm{g}\cdot\bm{v})
$$

ここで運動は $z$ 成分のみで $\bm{v}=(0,0,v_z)$、$\bm{g}=(0,0,-g)$、位置 $z_0$ で初速度が 0 であるとすると、

$$
    p_z=-m_0gt、
    p_z=\frac{m_0v_z}{\sqrt{1-\frac{v_z^2}{c^2}}}
$$
$$
    E_K=
    m_0c^2-m_0g(z-z_0)、
    E_K=
    \frac{m_0c^2}{\sqrt{1-\frac{v_z^2}{c^2}}}
$$

となる。このうち、$p_z$ に関する式から $v_z$ と求めると以下の通りになる。

$$
    v_z=
    -\frac{gt}
    {\sqrt{1+\lr{\frac{gt}{c}}^2}}
    
$$

この $v_z$ を利用することで、まず $E_K$ が

$$
    E_K=
    m_0c^2
    \sqrt{1+\lr{\frac{gt}{c}}^2}
$$

となることから、$E_K$ に関する式を用いて $z$ も得られる。

$$
    z=z_0+
    \frac{c^2}{g}
    \lr{
    1-\sqrt{1+\lr{\frac{gt}{c}}^2}
    }
$$

このとき、光速に比べて $gt$ が小さいものとすると

$$
    v_z=-gt、
    z=z_0-\frac{1}{2}gt^2
$$

というように従来と同じ形になることが分かる。次に、電場や磁場が働くとどうなるかを次項の電磁気学のところで見ていこう。

